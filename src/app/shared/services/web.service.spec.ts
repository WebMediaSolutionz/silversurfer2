import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

// Services
import { WebService } from './web.service';
import { ErrorDisplayService } from './error-display.service';
import { ErrorDisplayServiceStub } from './error-display.service.stub';
import { AuthService } from './auth.service';
import { AuthServiceStub } from './auth.service.stub';

// Classes
import { PasswordRules } from '../custom-types/classes/password-rules';
import { User } from '../custom-types/classes/user';

describe('Web Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WebService,
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub },
        { provide: AuthService, useClass: AuthServiceStub }
      ],
      imports: [ HttpModule ]
    });
  });

  describe('constructor()', () => {
    it('should be initialized', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        expect(service).toBeTruthy();
      }
    ));
  });

  describe('getPasswordRules()', () => {
    it('should invoke http.get to get the password rules', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['http'], 'get').and.callThrough();

        service.getPasswordRules().subscribe((passwordRules) => {
          expect(passwordRules).toBeTruthy();
        });

        expect(spy).toHaveBeenCalled();
        expect(service['dest']).toBe(service['API_URL'] + '/password-rules');
      }
    ));
  });

  describe('savePasswordRules()', () => {
    it('should invoke http.post to save the password rules', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['http'], 'post').and.callFake(() => {
          return Observable.empty();
        });

        let passwordRules: PasswordRules = new PasswordRules({
          minimumCharacters: 1,
          canContainThreeSequentialTypes: true,
          canStartEndNumber: true,
          minimumNonAlpha: true,
          changesBeforeReuseOld: 1,
          lockoutMessage: '',
          passwordAttemptsBeforeLockout: 1,
          passwordExpireDays: 1,
        });

        service.savePasswordRules(passwordRules);

        expect(spy).toHaveBeenCalled();
        expect(service['dest']).toBe(service['API_URL'] + '/password-rules');
      }
    ));
  });

  describe('getClients()', () => {
    it('should invoke http.get to save the password rules', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['http'], 'get').and.callThrough();

        service.getClients().subscribe((clients) => {
          expect(clients).toBeTruthy();
        });

        expect(spy).toHaveBeenCalled();
        expect(service['dest']).toBe(service['API_URL'] + '/client');
      }
    ));
  });

  describe('getUser()', () => {
    it('should invoke http.get to get the user', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['http'], 'get').and.callFake(() => {
          return Observable.empty();
        });

        service.getUser();

        expect(spy).toHaveBeenCalled();
        expect(service['dest']).toBe(service['API_URL'] + '/users/me');
      }
    ));
  });

  describe('saveUser()', () => {
    it('should invoke http.post to save the user', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['http'], 'post').and.callFake(() => {
          return Observable.empty();
        });

        service.saveUser(new User());

        expect(spy).toHaveBeenCalled();
        expect(service['dest']).toBe(service['API_URL'] + '/users/me');
      }
    ));
  });

  describe('getConfig()', () => {
    it('should invoke http.get to get the configuration info', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['http'], 'get').and.callThrough();

        service.getConfig().subscribe((configs) => {
          expect(configs.company).toBeTruthy();
        });

        expect(spy).toHaveBeenCalledWith(service['configUrl']);
      }
    ));
  });

  describe('_confirmationMsg()', () => {
    it('should invoke http.get to save the password rules', inject(
      [WebService, ErrorDisplayService, AuthService],
      (service: WebService) => {
        let spy = spyOn(service['errorDisplayService'], 'display');

        service['_confirmationMsg']();

        expect(spy).toHaveBeenCalledWith(`modifications have been saved`);
      }
    ));
  });
});
