import { Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PageTitleComponent } from './page-title.component';

// Pipes
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

describe('PageTitle Component', () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponentWrapper,
        PageTitleComponent,
        CapitalizePipe
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(TestComponentWrapper);
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
  template: '<ss2-page-title [pageTitle]="pageTitle"></ss2-page-title>'
})
class TestComponentWrapper {
  private pageTitle: string = 'blah';
}