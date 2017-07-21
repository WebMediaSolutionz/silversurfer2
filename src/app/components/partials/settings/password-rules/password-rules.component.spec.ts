import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// Components
import { PasswordRulesComponent } from './password-rules.component';

// Services
import { ValidationService } from '../../../../shared/services/validation.service';
import { ErrorDisplayService } from '../../../../shared/services/error-display.service';
import { ErrorDisplayServiceStub } from '../../../../shared/services/error-display.service.stub';
import { PasswordRulesService } from '../../../../shared/services/password-rules.service';
import { PasswordRulesServiceStub } from '../../../../shared/services/password-rules.service.stub';
import { ValidationServiceStub } from '../../../../shared/services/validation.service.stub';
import { ConfigService } from '../../../../shared/services/config.service';
import { ConfigServiceStub } from '../../../../shared/services/config.service.stub';

// Pipes
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

// Models
import { PasswordRule } from '../../../../shared/services/password-rules.model';

describe('PasswordRules Component', () => {
  let component: PasswordRulesComponent;
  let fixture: ComponentFixture<PasswordRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PasswordRulesComponent,
        CapitalizePipe
      ],
      providers: [
        { provide: ValidationService, useClass: ValidationServiceStub },
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub },
        { provide: PasswordRulesService, useClass: PasswordRulesServiceStub },
        { provide: ConfigService, useClass: ConfigServiceStub },
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(PasswordRulesComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it(`should invoke 'loadRules'`, () => {
      let spy = spyOn(component, 'loadRules');

      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('loadRules()', () => {
    it('should invoke PasswordRulesService.getRules and initialize form values', () => {
      let spy = spyOn(component['passwordRulesService'], 'getRules').and.callFake(() => {
        component['passwordRules'] = new PasswordRule({
          minimumCharacters: 1,
          minimumNonAlpha: true,
          canStartEndNumber: true,
          canContainThreeSequentialTypes: true,
          changesBeforeReuseOld: 1,
          passwordExpireDays: 1,
          passwordAttemptsBeforeLockout: 1,
          lockoutMessage: ''
        });

        return Observable.of(component['passwordRules']);
      });

      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
      expect(component['passwordRules']).not.toBeNull();
    });
  });

  describe('resetFormStatus()', () => {
    it('should reset nbrOfErrors value to 0 and triedSubmit value to false', () => {
      component['nbrOfErrors'] = 10;
      component['triedSubmit'] = true;

      fixture.detectChanges();
      component.resetFormStatus();

      expect(component['nbrOfErrors']).toBe(0);
      expect(component['triedSubmit']).toBeFalsy();
    });
  });

  describe('setFormValues()', () => {
    it('should set the form values', () => {
      fixture.detectChanges();

      component.setFormValues(true, true, true, '1', '1', '1', '1', '1');

      expect(component['myForm'].controls['minimumNonAlpha'].value).toBeTruthy();
      expect(component['myForm'].controls['canStartEndNumber'].value).toBeTruthy();
      expect(component['myForm'].controls['canContainThreeSequentialTypes'].value).toBeTruthy();
      expect(component['myForm'].controls['minimumCharacters'].value).toBe('1');
      expect(component['myForm'].controls['changesBeforeReuseOld'].value).toBe('1');
      expect(component['myForm'].controls['passwordExpireDays'].value).toBe('1');
      expect(component['myForm'].controls['passwordAttemptsBeforeLockout'].value).toBe('1');
      expect(component['myForm'].controls['lockoutMessage'].value).toBe('1');
    });
  });

  describe('onSubmit()', () => {
    it( 'should invoke PasswordRulesService.saveRules to save ' +
        'the password rules when form entries are valid', () => {
      let spy = spyOn(component['passwordRulesService'], 'saveRules').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();

      component.setFormValues(true, true, true, '1', '1', '1', '1', '1');
      component.onSubmit(component['passwordRules']);

      expect(spy).toHaveBeenCalledWith(component['passwordRules']);
    });

    it( 'should invoke ErrorDisplayService.display and ErrorDisplayService.getErrorCount ' +
        'when form entries are invalid', () => {
      let spy1 = spyOn(component['errorDisplayService'], 'display');
      let spy2 = spyOn(component['errorDisplayService'], 'getErrorCount');

      fixture.detectChanges();
      component.onSubmit(component['passwordRules']);

      expect(spy1).toHaveBeenCalledWith('Some entries are invalid');
      expect(spy2).toHaveBeenCalledWith(component['myForm'], false);
    });
  });
});
