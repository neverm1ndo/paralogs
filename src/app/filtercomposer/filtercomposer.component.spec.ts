import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercomposerComponent } from './filtercomposer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FiltercomposerComponent', () => {
  let component: FiltercomposerComponent;
  let fixture: ComponentFixture<FiltercomposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercomposerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercomposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
