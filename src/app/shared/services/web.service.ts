import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

// Services
import { AuthService } from './auth.service';

// Models
import { PasswordRule } from './password-rules.model';

@Injectable()
export class WebService {

  private BASE_URL = 'http://localhost:63145/api';

  private errorDuration: number;

  constructor(private http: Http,
              private sb: MdSnackBar,
              private authService: AuthService) {
    let errorDuration = ( localStorage.getItem('errorDuration') !== 'undefined') ?
                            localStorage.getItem('errorDuration') : '2000';

    this.errorDuration = parseInt(errorDuration, 10);
  }

  public getPasswordRules(): Observable<PasswordRule> {
    return this.http.get(this.BASE_URL + '/password-rules', this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public savePasswordRules(passwordRules: PasswordRule): Observable<PasswordRule> {
    this._handleError(`modifications have been saved`);

    return this.http
              .post(this.BASE_URL + '/password-rules', passwordRules, this.authService.tokenHeader)
              .map((res) => res.json());
  }

  public getClients(): any {
    return this.http.get(this.BASE_URL + '/api/client', this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getUser(): any {
    return this.http.get(this.BASE_URL + '/users/me', this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public saveUser(userData: any): any {
    this._handleError(`modifications have been saved`);

    return this.http.post(this.BASE_URL + '/users/me', userData, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  private _handleError(error: string) {
    this.sb.open(error, 'close', {duration: this.errorDuration});
  }

}
