import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs';

// Services
import { AuthService } from './auth.service';
import { ErrorDisplayService } from './error-display.service';

// Classes
import { PasswordRules } from '../custom-types/classes/password-rules';
import { User } from '../custom-types/classes/user';
import { Client } from '../custom-types/classes/client';

@Injectable()
export class WebService {

  private API_URL = 'http://localhost:63145/api';

  private configUrl = './assets/data/config.json';

  private dest: string;

  constructor(private http: Http,
              private errorDisplayService: ErrorDisplayService,
              private authService: AuthService) {}

  /**
   * contacts the backend API to retrieve the password rules
   */
  public getPasswordRules(): Observable<PasswordRules> {
    this.dest = this.API_URL + '/password-rules';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  /**
   * @param passwordRules
   * contacts the backend API to save the password rules
   */
  public savePasswordRules(passwordRules: PasswordRules): Observable<PasswordRules> {
    this._confirmationMsg();

    this.dest = this.API_URL + '/password-rules';

    return this.http
              .post(this.dest, passwordRules, this.authService.tokenHeader)
              .map((res) => res.json());
  }

  /**
   * contacts the backend API to get the clients
   */
  public getClients(): Observable<Client> {
    this.dest = this.API_URL + '/client';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  /**
   * contacts the backend API to get the current user information
   */
  public getUser(): Observable<User> {
    this.dest = this.API_URL + '/users/me';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  /**
   *
   * @param userData
   * contacts the backend API to save the current user information
   */
  public saveUser(userData: User): Observable<User> {
    this._confirmationMsg();

    this.dest = this.API_URL + '/users/me';

    return this.http.post(this.dest, userData, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  /**
   * gets the configuration settings for the app from a json file
   */
  public getConfig(): Observable<any> {
    return this.http.get(this.configUrl)
                    .map((res) => res.json());
  }

  /**
   * @param msg
   * prints a confirmation message
   */
  private _confirmationMsg(msg: string = `modifications have been saved`) {
    this.errorDisplayService.display(msg);
  }

}
