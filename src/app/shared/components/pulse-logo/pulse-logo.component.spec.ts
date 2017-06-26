import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdIconRegistry } from '@angular/material';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Components
import { PulseLogoComponent } from './pulse-logo.component';

describe('PulseLogo Component', () => {
  let component: PulseLogoComponent;
  let fixture: ComponentFixture<PulseLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PulseLogoComponent
      ],
      providers: [
        MdIconRegistry
      ],
      imports: [
        HttpModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(PulseLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });
  });
});
