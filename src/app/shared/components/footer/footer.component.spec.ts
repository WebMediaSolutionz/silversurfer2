import { Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder } from '@angular/forms';

// Components
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        FooterComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });

  describe('ngOnInit()', () => {
    it('should set the current year', () => {
      let d = new Date();
      let result = d.getFullYear();

      expect(component['year']).toBe(result);
    });
  });
});

@Component({
  selector: 'test-component-wrapper',
  template: '<ss2-footer [company]="company"></ss2-footer>'
})
class WrapperComponent {

  private company: string = 'Pulse System Inc.';

}
