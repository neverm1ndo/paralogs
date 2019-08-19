import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesslogComponent } from './processlog.component';

describe('ProcesslogComponent', () => {
  let component: ProcesslogComponent;
  let fixture: ComponentFixture<ProcesslogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesslogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
