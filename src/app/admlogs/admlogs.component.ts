import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admlogs',
  templateUrl: './admlogs.component.html',
  styleUrls: ['./admlogs.component.less']
})
export class AdmlogsComponent implements OnInit {


  @Input('loglist') loglist : Array<any>;
  @Input('preproc') preproc : string;
  @Input('height') innerHeight : number;


  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }
}
