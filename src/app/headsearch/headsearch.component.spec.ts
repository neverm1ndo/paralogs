import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsearchComponent } from './headsearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FileSizePipe } from '../file-size.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeadsearchComponent', () => {
  let component: HeadsearchComponent;
  let fixture: ComponentFixture<HeadsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ HeadsearchComponent, FileSizePipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
