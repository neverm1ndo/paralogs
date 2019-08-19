import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OptionsService } from '../options.service'

@Component({
  selector: 'app-filtercomposer',
  templateUrl: './filtercomposer.component.html',
  styleUrls: ['./filtercomposer.component.less']
})
export class FiltercomposerComponent implements OnInit {

  filterForm = new FormGroup({
    weapBuy: new FormControl(),
    killDeath: new FormControl(),
    spawn: new FormControl(),
    connection: new FormControl(),
    colChange: new FormControl(),
    preprocs: new FormControl(),
    dateFrom: new FormControl(),
    dateTo: new FormControl(),
    view: new FormControl(),
    litGr: new FormControl(),
    litPm: new FormControl(),
    idnick:new FormControl(),
    cmd:new FormControl()
  });

  defaultOptions = {
    weapBuy: true,
    killDeath: false,
    spawn: true,
    connection: false,
    colChange: true,
    preprocs: true,
    dateFrom: true,
    dateTo: true,
    view: true,
    litGr: true,
    litPm: true,
    idnick: true,
    cmd: true
  }

  constructor(
    public options: OptionsService
  ) { }


  setFilter() {
    let changedOpt = this.filterForm.getRawValue();
    window.localStorage.setItem('filter', JSON.stringify(changedOpt));
    this.options.options.next(changedOpt);
  }

  ngOnInit() {
    if (window.localStorage.getItem('filter')) {
      this.filterForm.setValue(JSON.parse(window.localStorage.getItem('filter')))
    } else {
      window.localStorage.setItem('filter', JSON.stringify(this.defaultOptions));
      this.filterForm.setValue(this.defaultOptions);
    }
  }

}
