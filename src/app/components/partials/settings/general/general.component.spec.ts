import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

// Components
import { GeneralComponent } from './general.component';

// Pipes
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

// Services
import { WebService } from '../../../../shared/services/web.service';
import { ErrorDisplayService } from "../../../../shared/services/error-display.service";

// Classes
import { User } from '../../../../shared/custom-types/classes/user';

class WebServiceStub {
  public getUser() {
    return Observable.of(new User());
  }

  public saveUser(user: User) {
    return Observable.empty();
  }
}

class ErrorDisplayServiceStub {
  display(error) {}
}

describe('General Component', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GeneralComponent,
        CapitalizePipe   
      ],
      providers: [
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub },
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it('should invoke WebService.getUser', () => {
      let spy = spyOn(component['webService'], 'getUser').and.callFake(() => {
        return Observable.of(new User());
      });

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component['user']).toBeTruthy();
    });
  });

  describe('save()', () => {
    it('should invoke ErrorDisplayService.display when user enters the wrong password', () => {
      component['password'].current = 'bbb';
      component['user'].password = 'aaa';
      
      let spy = spyOn(component['errorDisplayService'], 'display');

      fixture.detectChanges();
      component.save();

      expect(spy).toHaveBeenCalledWith('Email or Password incorrect');
    });

    it(`should invoke ErrorDisplayService.display when the confirm password doesn't match the password`, () => {
      component['password'].current = 'aaa';
      component['user'].password = 'aaa';
      component['password'].new = 'bbb';
      component['password'].confirmNew = 'ccc';

      let spy = spyOn(component['errorDisplayService'], 'display');

      fixture.detectChanges();
      component.save();

      expect(spy).toHaveBeenCalledWith('Some entries are invalid');
    });

    it(`should invoke WebService.saveUser when credentials are correct and new password matches confirm password`, () => {
      component['password'].current = 'aaa';
      component['user'].password = 'aaa';
      component['password'].new = 'bbb';
      component['password'].confirmNew = 'bbb';

      let spy = spyOn(component['webService'], 'saveUser').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();
      component.save();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('mismatchedFields()', () => {
    it('should set passwordsmatch to true if new and confirm new passwords match', () => {
      component['password'].new = 'aaa';
      component['password'].confirmNew = 'aaa';

      fixture.detectChanges();
      component.mismatchedFields();

      expect(component['passwordsMatch']).toBeTruthy();
    });

    it(`should set passwordsmatch to false if new and confirm new passwords don't match`, () => {
      component['password'].new = 'aaa';
      component['password'].confirmNew = 'bbb';

      fixture.detectChanges();
      component.mismatchedFields();

      expect(component['passwordsMatch']).toBeFalsy();
    });
  });

  describe('_clearForm()', () => {
    it('should clear the password properties', () => {
      component['password'].current = 'aaa';
      component['password'].new = 'aaa';
      component['password'].confirmNew = 'aaa';

      fixture.detectChanges();
      component['_clearForm']();

      expect(component['password'].current).toBe('');
      expect(component['password'].new).toBe('');
      expect(component['password'].confirmNew).toBe('');
    });
  });
});
