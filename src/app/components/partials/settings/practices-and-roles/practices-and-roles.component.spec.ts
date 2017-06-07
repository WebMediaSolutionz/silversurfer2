import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesAndRolesComponent } from './practices-and-roles.component';

describe('PracticesAndRolesComponent', () => {
  let component: PracticesAndRolesComponent;
  let fixture: ComponentFixture<PracticesAndRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticesAndRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticesAndRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
