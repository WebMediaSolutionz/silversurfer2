import { TestBed, inject } from '@angular/core/testing';
import { Router } from "@angular/router";
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs";

// Services
import { AuthService } from './auth.service';
import { ErrorDisplayService } from "./error-display.service";

// Classes
import { Credentials } from '../custom-types/classes/credentials';

class ErrorDisplayServiceStub {
  display = (errorMsg) => {}
}

class RouterStub {
  navigate(route: any) {}
}

describe('Auth Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub },
        { provide: Router, useClass: RouterStub }
      ],
      imports: [ HttpModule ]
    });
  });

  describe('constructor()', () => {
    it('should be initialized', inject([AuthService, ErrorDisplayService, Router], (service: AuthService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('login()', () => {
    it('should invoke Http.post with the login data in order to log user in', inject([AuthService, ErrorDisplayService, Router], (service: AuthService) => {
      let spy  = spyOn(service['http'], 'post').and.callFake(() => {
        return Observable.empty();
      });

      service.login(null);

      expect(spy).toHaveBeenCalledWith(service['API_URL'] + '/login', null);
    }));
  });

  describe('register()', () => {
    it('should invoke Http.post with the user data in order for the user to sign up', inject([AuthService, ErrorDisplayService, Router], (service: AuthService) => {
      let spy  = spyOn(service['http'], 'post').and.callFake(() => {
        return Observable.empty();
      });

      service.register({});

      expect(spy).toHaveBeenCalledWith(service['API_URL'] + '/register', {});
    }));
  });

  describe('logout()', () => {
    it(`should clear the 'token key' and 'name key' from local storage and redirect the user to the login page`, inject([AuthService, ErrorDisplayService, Router], (service: AuthService) => {
      let spy  = spyOn(service['router'], 'navigate');

      service.logout();

      expect(localStorage.getItem(service['TOKEN_KEY'])).toBeNull();
      expect(localStorage.getItem(service['NAME_KEY'])).toBeNull();
      expect(spy).toHaveBeenCalledWith(['/login']);
    }));
  });

  describe('_authenticate()', () => {
    it(`should display an error message if the server does not return a token`, inject([AuthService, ErrorDisplayService, Router], (service: AuthService) => {
      let spy  = spyOn(service['errorDisplayService'], 'display');
      let authResponse = new Response();

      service['_authenticate'](authResponse);

      expect(localStorage.getItem(service['TOKEN_KEY'])).toBeNull();
      expect(localStorage.getItem(service['NAME_KEY'])).toBeNull();
      expect(spy).toHaveBeenCalled();
    }));

    it(`should save the token and the firstname in localstorage if the server does return a token`, inject([AuthService, ErrorDisplayService, Router], (service: AuthService) => {
      let spy  = spyOn(service['router'], 'navigate');
      let creds: Credentials = new Credentials();
      creds.account = 'QB1486';
      creds.username = 'doctor';
      creds.password = 'orthodoc';

      service['http'].post(service['API_URL'] + '/login', creds).subscribe(
        (res) => {
          service['_authenticate'](res);
        },
        (error) => console.error(error),
        () => {
          expect(localStorage.getItem(service['TOKEN_KEY'])).not.toBeNull();
          expect(localStorage.getItem(service['NAME_KEY'])).not.toBeNull();
          expect(spy).toHaveBeenCalledWith(['/']);
        });
    }));
  });
});
