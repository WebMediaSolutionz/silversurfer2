import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionWarningsComponent } from './interaction-warnings.component';

describe('InteractionWarningsComponent', () => {
  let component: InteractionWarningsComponent;
  let fixture: ComponentFixture<InteractionWarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionWarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
