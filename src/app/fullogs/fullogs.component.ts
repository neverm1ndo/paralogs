import { Component, OnInit, Input, HostListener, OnChanges } from '@angular/core';
import { KEY_CODE } from '../keycodes.mock';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-fullogs',
  templateUrl: './fullogs.component.html',
  styleUrls: ['./fullogs.component.less']
})
export class FullogsComponent implements OnInit, OnChanges {

  full_viewmode: string;
  _page: number = 1;

  pager: any = {};
  pagedItems: any[];
  @Input('height') innerHeight : number;

  @Input() set page(page: number) {
      this._page = page;
  };

  @Input('loglist') loglist : Array<any>;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.ctrlKey) {
      switch (event.keyCode) {
        case KEY_CODE.ARROW_L:
          if (this.pager.currentPage != 1) {
            this.setPage(this.pager.currentPage - 1)
          };
        break;
        case KEY_CODE.ARROW_R:
          if (this.pager.currentPage < this.pagedItems.length - 1) {
            this.setPage(this.pager.currentPage + 1);
          };
        break;
      };
    };
  }

  constructor(
    public pagination: PaginationService
  ) { }

  setPage(page: number) {
    this.pager = this.pagination.getPager(this.loglist.length, page);
    this.pagedItems = this.loglist.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setView(view: string) {
    this.full_viewmode = view;
    window.localStorage.setItem('view', view);
  }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
    if (window.localStorage.getItem('view')) {
      this.full_viewmode = window.localStorage.getItem('view');
    } else {
      this.full_viewmode = 'full';
    }
    this.setPage(this._page);
  }
  ngOnChanges() {
    this.setPage(this._page);
  }

}
