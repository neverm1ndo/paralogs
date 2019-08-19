import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { LogService } from '../log.service';
import { ErrorService } from '../error.service';
import { upfade } from '../app.animations';

@Component({
  selector: 'app-headsearch',
  templateUrl: './headsearch.component.html',
  styleUrls: ['./headsearch.component.less'],
  animations: [ upfade ]
})
export class HeadsearchComponent implements OnInit {

  currentNickname = new FormControl('');

  constructor(
    private router: Router,
    public log: LogService,
    public error: ErrorService,
  ) {}

  search(nickname: string) {
    if (nickname.length>=3 || nickname.length==0) {
      this.router.navigate(['/'+nickname]);
    } else {
      this.error.showError('Слишком короткое значение. Минимум 3 символа.')
    }
  }

  read(e: any) {
    this.log.multiFileRead(e);
  }

  ngOnInit() {
    this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          this.currentNickname.setValue(decodeURI(e.url).slice(1));
   }).closed;
  }

}
