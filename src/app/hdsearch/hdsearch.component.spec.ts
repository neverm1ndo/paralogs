import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdsearchComponent } from './hdsearch.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HdPipe } from '../hd.pipe';

describe('HdsearchComponent', () => {
  let component: HdsearchComponent;
  let fixture: ComponentFixture<HdsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdsearchComponent, HdPipe ],
            schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
