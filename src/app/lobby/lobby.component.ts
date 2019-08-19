import { Component, OnInit, HostListener } from '@angular/core';
import { preload } from '../app.animations';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less'],
  animations: [preload]
})
export class LobbyComponent implements OnInit {

  help: boolean = true;
  license: boolean;
  innerHeight: number;
  version: string = '1.0';

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.innerHeight = window.innerHeight;
    }

  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }

}
