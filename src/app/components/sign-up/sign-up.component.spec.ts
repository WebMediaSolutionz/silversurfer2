import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// Components
import { SignUpComponent } from './sign-up.component';
import { FieldComponent } from '../../shared/components/field/field.component';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

// Services
import { AuthService } from '../../shared/services/auth.service';
import { ErrorDisplayService } from '../../shared/services/error-display.service';
import { AuthServiceStub } from '../../shared/services/auth.service.stub';
import { ErrorDisplayServiceStub } from '../../shared/services/error-display.service.stub';
import { RouterStub } from '../../shared/services/router.service.stub';

// Classes
import { User } from '../../shared/custom-types/classes/user';
import { Attributes } from '../../shared/custom-types/classes/attributes';

describe('SignUp Component', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignUpComponent,
        FieldComponent,
        CapitalizePipe
      ],
      providers: [
        FormBuilder,
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub },
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeDefined();
    });
  });

  describe('ngOnInit()', () => {
    it('should invoke _initializeForm to set default form values and initialize form group', () => {
      let spy = spyOn(component, '_initializeForm').and.callThrough();

      fixture.detectChanges();

      expect(component).toBeDefined();
      expect(component['form']).toBeTruthy();
    });
  });

  describe('onSubmit()', () => {
    it( 'should invoke ErrorDisplayService.display to display ' +
        'error message when form is invalid', () => {
      let spy = spyOn(component['errorDisplayService'], 'display');

      fixture.detectChanges();
      component.onSubmit(null);

      expect(component['form'].valid).toBeFalsy();
      expect(spy).toHaveBeenCalled();
    });

    it('should invoke AuthService.register to register user when the form is valid', () => {
      let spy = spyOn(component['authService'], 'register');

      fixture.detectChanges();

      component['form'].controls['account'].setValue('a');
      component['form'].controls['firstname'].setValue('a');
      component['form'].controls['lastname'].setValue('a');
      component['form'].controls['username'].setValue('a');
      component['form'].controls['password'].setValue('a');
      component['form'].controls['confirmPassword'].setValue('a');

      component.onSubmit(null);

      expect(component['form'].valid).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('isInvalid()', () => {
    it(`should return true if a form control is 'invalid' and is 'touched'`, () => {
      fixture.detectChanges();

      let field = 'firstname';

      component['form'].controls[field].markAsTouched();

      expect(component['form'].controls[field].invalid).toBeTruthy();
      expect(component['form'].controls[field].touched).toBeTruthy();
      expect(component.isInvalid(field)).toBeTruthy();
    });

    it(`should return false if a form control is 'invalid' and is 'untouched'`, () => {
      fixture.detectChanges();

      let field = 'firstname';

      expect(component['form'].controls[field].invalid).toBeTruthy();
      expect(component['form'].controls[field].touched).toBeFalsy();
      expect(component.isInvalid(field)).toBeFalsy();
    });

    it(`should return false if a form control is 'valid' and 'touched'`, () => {
      fixture.detectChanges();

      let field = 'firstname';

      component['form'].controls[field].setValue('a');
      component['form'].controls[field].markAsTouched();

      expect(component['form'].controls[field].invalid).toBeFalsy();
      expect(component['form'].controls[field].touched).toBeTruthy();
      expect(component.isInvalid(field)).toBeFalsy();
    });

    it(`should return false if a form control is 'invalid' and 'untouched'`, () => {
      fixture.detectChanges();

      let field = 'firstname';

      component['form'].controls[field].setValue('a');

      expect(component['form'].controls[field].invalid).toBeFalsy();
      expect(component['form'].controls[field].touched).toBeFalsy();
      expect(component.isInvalid(field)).toBeFalsy();
    });
  });

  describe('_initializeForm()', () => {
    it('should initialize all component form field attributes', () => {
      fixture.detectChanges();

      expect(component['accountFieldAttr']).toBeTruthy();
      expect(component['errorDuration']).toBeTruthy();
      expect(component['firstNameFieldAttr']).toBeTruthy();
      expect(component['lastNameFieldAttr']).toBeTruthy();
      expect(component['userNameFieldAttr']).toBeTruthy();
      expect(component['passwordFieldAttr']).toBeTruthy();
      expect(component['confirmPasswordFieldAttr']).toBeTruthy();
    });
  });

  describe('_matchingFields()', () => {
    it(`should set form.errors to null if the 'password' and ` +
      `'passwordConfirm' field values match`, () => {
      fixture.detectChanges();

      let field1 = 'password';
      let field2 = 'confirmPassword';

      component['form'].controls[field1].setValue('a');
      component['form'].controls[field2].setValue('a');

      expect(component['form'].errors).toBeNull();
    });

    it(`should not set form.errors to null if the 'password' and ` +
      `'passwordConfirm' field values dont match`, () => {
      fixture.detectChanges();

      let field1 = 'password';
      let field2 = 'confirmPassword';

      component['form'].controls[field1].setValue('a');
      component['form'].controls[field2].setValue('b');

      expect(component['form'].errors).not.toBeNull();
    });
  });
});
