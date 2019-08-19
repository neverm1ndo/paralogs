import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(public options: OptionsService) { }

  settings = new FormGroup({
    black: new FormControl(),
    gpu: new FormControl(),
    tray: new FormControl(),
    develop: new FormControl()
  });

  defaultSettings = {
    black: false,
    gpu: true,
    tray: true,
    develop: false
  }

  setup() {
    let newSets = this.settings.getRawValue();
    window.localStorage.setItem('settings', JSON.stringify(newSets));
    this.options.sets.next(newSets);
  }

  ngOnInit() {
    if (window.localStorage.getItem('settings')) {
      this.settings.setValue(JSON.parse(window.localStorage.getItem('settings')))
    } else {
      window.localStorage.setItem('settings', JSON.stringify(this.defaultSettings));
      this.settings.setValue(this.defaultSettings);
    }
  }

}
