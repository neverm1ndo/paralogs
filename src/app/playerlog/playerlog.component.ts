import { Component, OnInit, HostListener } from '@angular/core';
import { LogService } from '../log.service';
import { ErrorService } from '../error.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { preload } from '../app.animations';

@Component({
  selector: 'app-playerlog',
  templateUrl: './playerlog.component.html',
  styleUrls: ['./playerlog.component.less'],
  animations: [preload]
})
export class PlayerlogComponent implements OnInit {

  loglist : any;
  player: string;
  hdseries: string;
  preproc: string;
  mode: string;
  page: number;

  constructor(
    public log : LogService,
    public error: ErrorService,
    private route: ActivatedRoute,

  ) { }

  public innerHeight: any;

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.innerHeight = window.innerHeight;
    }

  async logToCollection(log: string) {
    let logObj = new Object;
    let logarr = log.split(/\n/g);
    if (logarr.includes)
    for (var i = 1; i < logarr.length - 1; ++i) {
      let info = logarr[i].split(/\s/g);
      logObj[i] = {
        date: info[0],
        process: info[2],
        player: {
          nickname: info[3],
          id: info[4],
          motion: logarr[i].split(info[4])[1],
          geo: null
        }
      }
    }
    try {
      const res = await new Promise((resolve, reject) => {
        if (+logObj[1].date > 1540000000000 )
          resolve(Object.values(logObj));
        else {
          reject(new Error('Не удалось распарсить лог. Возможно файл не является логом сервера Paradise.'));
        }
      });
      console.log('resolved', res);
      this.loglist = res;
    }
    catch (err) {
      this.log.status.next(false);
      return this.error.showError(err.message);
    }
  }

  parseSearch(params: any) {
    let splited : Array<string> = (params['player'].split(':'));
    if (params['player'].match(':')) {
      switch (splited[0]) {
        case 'hd':
          this.hdseries = splited[1];
          this.mode = 'hd';
          break;
        case 'sm':
          this.hdseries = splited[1];
          this.mode = 'sm';
          break;
        case 'acheat':
          this.preproc = 'acheat';
          this.mode = 'acheat';
          break;
        case 'full':
          this.page = +splited[1];
          this.mode = 'full';
          break;
        case 'adm':
          this.preproc = 'auth';
          this.mode = 'adm';
          break;
        case 'charts':
          this.mode = 'charts';
          break;
      }
    } else {
      this.player = params['player'] || '';
      this.mode = 'player';
    }
  }



  ngOnInit() {
    this.innerHeight = window.innerHeight;

    console.log(innerWidth);
    this.route.params
    .subscribe(params => {
      this.parseSearch(params);
    });
    this.log.file.pipe(
    filter(log => log!==null))
    .subscribe( log => {
      this.logToCollection(log);
    });
  }

}
