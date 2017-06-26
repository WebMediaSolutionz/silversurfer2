import { Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PageTitleComponent } from './page-title.component';

// Pipes
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

describe('PageTitle Component', () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        PageTitleComponent,
        CapitalizePipe
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
  selector: 'wrapper',
  template: '<ss2-page-title [pageTitle]="pageTitle"></ss2-page-title>'
})
class WrapperComponent {
  private pageTitle: string = 'blah';
}
