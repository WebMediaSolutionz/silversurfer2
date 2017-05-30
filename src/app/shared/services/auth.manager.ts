import { Injectable } from '@angular/core';

import {  CanActivate,
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthManager implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
    }
}
