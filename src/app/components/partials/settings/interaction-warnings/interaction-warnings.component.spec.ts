import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

// Components
import { InteractionWarningsComponent } from './interaction-warnings.component';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';

// Pipes
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

describe('InteractionWarnings Component', () => {
  let component: InteractionWarningsComponent;
  let fixture: ComponentFixture<InteractionWarningsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InteractionWarningsComponent,
        PageTitleComponent,
        CapitalizePipe
      ],
      imports: [
        MaterialModule
      ]
    });

    fixture = TestBed.createComponent(InteractionWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });

    it(`should have a title of "interaction warnings"`, () => {
      expect(component['title']).toBe('interaction warnings');
    });
  });
});
