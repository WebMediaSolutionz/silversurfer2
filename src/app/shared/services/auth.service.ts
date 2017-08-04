import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// Services
import { ErrorDisplayService } from './error-display.service';

// Classes
import { Credentials } from '../custom-types/classes/credentials';

@Injectable()
export class AuthService {

  private API_URL: string = 'http://localhost:63145/auth';

  private NAME_KEY: string = 'name';

  private TOKEN_KEY: string = 'token';

  constructor(private http: Http,
              private errorDisplayService: ErrorDisplayService,
              private router: Router) {}

  public get name(): string {
    return localStorage.getItem(this.NAME_KEY);
  }

  public get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public set isAuthenticated(value: boolean) {
    // empty implementation just for the purposes of testing
  }

  public get tokenHeader(): RequestOptions {
    let header = new Headers({authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});

    return new RequestOptions({headers: header});
  }

  public login(creds: Credentials): void {
    this.http.post(this.API_URL + '/login', creds).subscribe(
      (res) => {
        this._authenticate(res);
      },
      (error) => {
        this.errorDisplayService.display('500 - server error');
      });
  }

  public register(user: any): void {
    delete user.confirmPassword;

    this.http.post(this.API_URL + '/register', user).subscribe(
      (res) => {
        this._authenticate(res);
      },
      (error) => {
        this.errorDisplayService.display('500 - server error');
      });
  }

  public logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);

    this.router.navigate(['/login']);
  }

  private _authenticate(res): void {
    let authResponse = res.json();

    if (!authResponse.token) {
      this.errorDisplayService.display(authResponse.message);
      return;
    }

    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.NAME_KEY, authResponse.firstname);

    this.router.navigate(['/']);
  }

}
