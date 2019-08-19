import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmlogsComponent } from './admlogs.component';

describe('AdmlogsComponent', () => {
  let component: AdmlogsComponent;
  let fixture: ComponentFixture<AdmlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
