import { Component, HostListener} from '@angular/core';
import { KEY_CODE } from './keycodes.mock';
import { Router } from '@angular/router';
import { OptionsService } from './options.service';
import { settings, preload } from './app.animations';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [settings, preload]
})
export class AppComponent {

  constructor(
    private router: Router,
    private location: Location,
    public options: OptionsService
  ) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode) {
      switch (event.keyCode) {
        case KEY_CODE.ESC:
          this.location.back();
        break;
        case KEY_CODE.F2:
          this.location.forward();
        break;
      }
   }
   if (event.altKey) {
     console.log(event.keyCode);
     switch (event.keyCode) {
       case KEY_CODE.F:
          this.router.navigate(['/full:']);
        break;
       case KEY_CODE.A:
          this.router.navigate(['/acheat:']);
        break;
       case KEY_CODE.D:
          this.router.navigate(['/adm:']);
        break;
       case KEY_CODE.C:
          this.router.navigate(['/charts:']);
        break;
      }
    }
  }
}
