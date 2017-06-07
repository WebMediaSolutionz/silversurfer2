import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

// Services
import { AuthService } from './auth.service';

@Injectable()
export class WebService {

  private BASE_URL = 'http://localhost:63145/api';

  private error_duration: number;

  constructor(private http: Http,
              private sb: MdSnackBar,
              private authService: AuthService) {
    let error_duration = ( localStorage.getItem('error_duration') !== 'undefined') ?
                            localStorage.getItem('error_duration') : '2000';

    this.error_duration = parseInt(error_duration);
  }

  public getPractices(): any {
    return this.http.get(this.BASE_URL + '/practices', this.authService.tokenHeader)
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
    this.sb.open(error, 'close', {duration: this.error_duration});
  }

}
