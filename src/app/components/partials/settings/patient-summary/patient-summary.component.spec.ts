import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

// Components
import { PatientSummaryComponent } from './patient-summary.component';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';

// Pipes
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

describe('PatientSummary Component', () => {
  let component: PatientSummaryComponent;
  let fixture: ComponentFixture<PatientSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PatientSummaryComponent,
        PageTitleComponent,
        CapitalizePipe
      ],
      imports: [
        MaterialModule
      ]
    });

    fixture = TestBed.createComponent(PatientSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });

    it(`should have a title of "patient summary"`, () => {
      expect(component['title']).toBe('patient summary');
    });
  });
});
