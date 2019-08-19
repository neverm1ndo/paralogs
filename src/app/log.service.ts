import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private storage: AngularFireStorage,
    public error: ErrorService
  ) { }

  currentTarget: string;
  public file: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  status: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  progress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  loglist: Array<any>;
  loading: boolean = false;
  info = {
    size: 0,
    length: 0
  };

  async multiFileRead(e: any) {
    let info = {
      size: 0,
      length: 0
    };
    let files = [].slice.call(e.target.files);
    let stack = [];
    info.length = files.length;
    files.forEach(async (file: File) => {
      const filePath = `logs/${file.name}`;
      if (file.type === 'text/plain') {
        this.storage.ref(filePath).put(file);
        let reader = new FileReader();
        info.size += file.size;
          reader.onload = async() => {
            await stack.push(reader.result.toString());

            stack.sort((fileA: string, fileB: string) => fileA.slice(0, 12).localeCompare(fileB.slice(0, 12)));

            this.progress.next(0);
            this.status.next(true);
            this.file.next(stack.join());
        }
        reader.onprogress = (e) => {
          if (e.lengthComputable) {
            this.progress.next(Math.floor((e.loaded / e.total) * 100));
            this.status.next(false);
          }
        }
        reader.onabort = () => {
          this.error.showError('Не выбрано ни одного файла или загрузка была отменена.')
        }
        reader.readAsText(file, 'cp1251');
      } else {
        this.error.showError('Выбранный тип файла не соотвествует допустимым типам MIME');
      }
    });
    this.info = info;
  }

  parseGeoSeries(gs: string) {
  return new Promise((resolve, reject) => {
      let series: any = {};
      let parsed = gs.match(/\{(.*?)\}/g);
      parsed.forEach((s: any) => {
        let serial = s.match(/[^\{\}':']+/g)[0];
        let ser_value = s.match(/[^\{\}':']+/g)[1];
        series[serial] = ser_value;
      });
      resolve(series);
      reject(new Error('Не удалость распарсить геоданные.'))
    })
    .then( series => series )
    .catch( err => this.error.showError(err.message));
  }

  findActionById(date: number, move: string) {
    let list = this.loglist;
    if (move=='kick' || move=='ban') {
    return list.filter( it => {
        if (it!==undefined) {
          return it.date.includes(+date.toString().slice(0, date.toString().length - 3)) && it.process.includes(`<connection/disconnect/${move}>`);
        };
      });
    } else {
        return list.filter( it => {
        if (it!==undefined) {
          return it.date.includes(+date.toString().slice(0, date.toString().length - 3)) && it.process.includes('<mute/on/hand>');
        };
      });
    }
  }
}
