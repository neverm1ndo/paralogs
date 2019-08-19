import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullogsComponent } from './fullogs.component';

describe('FullogsComponent', () => {
  let component: FullogsComponent;
  let fixture: ComponentFixture<FullogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullogsComponent ]
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
