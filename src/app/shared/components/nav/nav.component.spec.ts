import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { Observable } from "rxjs";

// Components
import { NavComponent } from './nav.component';

// Pipes
import { CapitalizePipe } from "../../../shared/pipes/capitalize.pipe";

// Services
import { AuthService } from '../../../shared/services/auth.service';
import { ConfigService } from '../../../shared/services/config.service';

class RouterStub {
  navigate: (route) => {}

  events = Observable.empty();
};

class AuthServiceStub {}

class ConfigServiceStub {}

describe('Nav Component', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavComponent,
        CapitalizePipe
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: ConfigService, useClass: ConfigServiceStub },
        { provide: Location, useClass: SpyLocation },
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });
  });
});
