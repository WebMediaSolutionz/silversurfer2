import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

// Services
import { AuthService } from './auth.service';

@Injectable()
export class WebService {

  private BASE_URL = 'http://localhost:63145/api';

  constructor(private http: Http,
              private sb: MdSnackBar,
              private authService: AuthService) {}

  public getUser(): any {
    return this.http.get(this.BASE_URL + '/users/me', this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public saveUser(userData: any): any {
    this.handleError(`modifications have been saved`);

    return this.http.post(this.BASE_URL + '/users/me', userData, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  private handleError(error: string) {
    this.sb.open(error, 'close', {duration: 2000});
  }
}
