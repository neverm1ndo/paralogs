import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from './mocks/options.mock'
import { Settings } from './mocks/sets.interface'

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  options: BehaviorSubject<Options> = new BehaviorSubject<Options>(JSON.parse(window.localStorage.getItem('filter')));
  sets: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(JSON.parse(window.localStorage.getItem('settings')));
  settings: boolean = false;

  toggleSettings() {
    this.settings = this.settings ? false : true;
  }

  constructor() {
  }
}
