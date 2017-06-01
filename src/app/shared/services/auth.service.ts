import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

// Classes
import { Credentials } from '../custom-types/classes/credentials';

@Injectable()
export class AuthService {

  private BASE_URL: string = 'http://localhost:63145/auth';

  private NAME_KEY: string = 'name';

  private TOKEN_KEY: string = 'token';

  constructor(private http: Http,
              private sb: MdSnackBar,
              private router: Router) {}

  public get name(): string {
    return localStorage.getItem(this.NAME_KEY);
  }

  public get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public get tokenHeader(): RequestOptions {
    let header = new Headers({authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});

    return new RequestOptions({headers: header});
  }

  public login(loginData): void {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe(
      (res) => {
        this._authenticate(res);
      },
      (error) => {
        this.sb.open('500 - server error', 'close', {duration: 2000});
      });
  }

  public register(user): void {
    delete user.confirmPassword;

    this.http.post(this.BASE_URL + '/register', user).subscribe(
      (res) => {
        this._authenticate(res);
      },
      (error) => {
        this.sb.open('500 - server error', 'close', {duration: 2000});
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
      this.sb.open(authResponse.message, 'close', {duration: 2000});
      return;
    }

    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.NAME_KEY, authResponse.firstname);

    this.router.navigate(['/']);
  }

}
