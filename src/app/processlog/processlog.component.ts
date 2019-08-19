import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-processlog',
  templateUrl: './processlog.component.html',
  styleUrls: ['./processlog.component.less']
})
export class ProcesslogComponent {

  @Input('loglist') loglist : Array<any>;
  @Input('process') preproc : string;
  @Input('height') innerHeight : number;
}
