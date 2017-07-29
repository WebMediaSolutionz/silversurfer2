import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

// Components
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';

// Pipes
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

describe('PrivacyPolicy Component', () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrivacyPolicyComponent,
        PageTitleComponent,
        CapitalizePipe
      ],
      imports: [
        MaterialModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });

    it(`should have a title of "privacy policy"`, () => {
      expect(component['title']).toBe('privacy policy');
    });
  });
});
