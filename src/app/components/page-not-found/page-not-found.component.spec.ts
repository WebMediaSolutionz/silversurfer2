import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PageNotFoundComponent } from './page-not-found.component';

// Pipes
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

describe('PageNotFound Component', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent,
        CapitalizePipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });

    it(`should have an error message of 'page not found'`, () => {
      expect(component['errorMsg']).toBe('page not found');
    });

    it(`should have an error code of 404`, () => {
      expect(component['errorCode']).toBe(404);
    });

    it(`should have title of '- 404 -'`, () => {
      expect(component['title']).toBe('- 404 -');
    });
  });
});
