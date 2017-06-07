import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseLogoComponent } from './pulse-logo.component';

describe('PulseLogoComponent', () => {
  let component: PulseLogoComponent;
  let fixture: ComponentFixture<PulseLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
