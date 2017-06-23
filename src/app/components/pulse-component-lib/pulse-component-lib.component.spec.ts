import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseComponentLibComponent } from './pulse-component-lib.component';

describe('PulseComponentLibComponent', () => {
  let component: PulseComponentLibComponent;
  let fixture: ComponentFixture<PulseComponentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseComponentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
