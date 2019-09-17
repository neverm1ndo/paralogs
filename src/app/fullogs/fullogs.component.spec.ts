import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullogsComponent } from './fullogs.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PaginationService } from '../pagination.service';
// import { RouterModule } from '@angular/router';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

class MockPaginationService {
  getPager() {
    return {
      totalItems: 100,
      currentPage: 1,
      pageSize: 10,
      totalPages: 10,
      startPage: 1,
      endPage: 10,
      startIndex: 1,
      endIndex: 10,
      pages: 10
    }
  }
};

describe('FullogsComponent', () => {
  let component: FullogsComponent;
  let fixture: ComponentFixture<FullogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [ RouterModule ],
      declarations: [ FullogsComponent ],
      providers: [ FullogsComponent, {provide: PaginationService, useClass: MockPaginationService}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
