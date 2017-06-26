import { Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder } from '@angular/forms';

// Components
import { FieldComponent } from './field.component';

// Pipes
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

// Classes
import { Attributes } from '../../custom-types/classes/attributes';

describe('Field Component', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        FieldComponent,
        CapitalizePipe
      ],
      providers: [
        FormBuilder
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
});

@Component({
  selector: 'test-component-wrapper',
  template: '<ss2-field [group]="group" [attributes]="attributes"></ss2-field>'
})
class WrapperComponent {

  private group: FormGroup;

  private attributes: Attributes = new Attributes();

  constructor(private fb: FormBuilder) {
    this.group = this.fb.group({});
  }
}
