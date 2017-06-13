import { TestBed, inject } from '@angular/core/testing';

import {  CanActivate,
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot } from '@angular/router';

// Services
import { AuthManager } from './auth.manager';
import { AuthService } from "./auth.service";

class RouterStub {
  navigate (route: any) {}
}

class AuthServiceStub {
  isAuthenticated: boolean;
}

describe('Auth Manager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthManager,
        { provide: Router, useClass: RouterStub },
        { provide: AuthService, useClass: AuthServiceStub }
      ]
    });
  });

  describe('constructor()', () => {
    it('should be initialized', inject([AuthManager, AuthService], (service: AuthManager) => {
      expect(service).toBeDefined();
    }));
  });

  describe('canActivate()', () => {
    let next: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;
    
    it(`should return "true" if the user is authenticated`, inject([AuthManager, AuthService], (service: AuthManager) => {
      service['authService'].isAuthenticated = true;

      let result = service.canActivate(next, state);

      expect(result).toBeTruthy();
    }));

    it('should return "false" if the user is not authenticated and redirected to login', inject([AuthManager, AuthService], (service: AuthManager) => {
      service['authService'].isAuthenticated = false;

      let spy = spyOn(service['router'], 'navigate');
      let result = service.canActivate(next, state);

      expect(spy).toHaveBeenCalledWith(['/login']);
      expect(result).toBeFalsy();
    }));
  });
});
