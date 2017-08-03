import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs';

// Services
import { AuthService } from './auth.service';
import { ErrorDisplayService } from './error-display.service';

// Models
import { PasswordRule } from './password-rules.model';
import { User } from '../custom-types/classes/user';
import { Client } from '../custom-types/classes/client';
import { Message } from '../custom-types/interfaces/message';

@Injectable()
export class WebService {

  private API_URL = 'http://localhost:63145/api';

  private configUrl = './assets/data/config.json';

  private dest: string;

  constructor(private http: Http,
              private errorDisplayService: ErrorDisplayService,
              private authService: AuthService) {}

  public getPasswordRules(): Observable<PasswordRule> {
    this.dest = this.API_URL + '/password-rules';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public savePasswordRules(passwordRules: PasswordRule): Observable<PasswordRule> {
    this._confirmationMsg();

    this.dest = this.API_URL + '/password-rules';

    return this.http
              .post(this.dest, passwordRules, this.authService.tokenHeader)
              .map((res) => res.json());
  }

  public getMessages(): Observable<Message[]> {
    this.dest = this.API_URL + '/messages';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public postMessage(msg: Message): Observable<Message> {
    console.info(msg);

    this.dest = this.API_URL + '/message';

    return this.http.post(this.dest, msg, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getClients(): Observable<Client> {
    this.dest = this.API_URL + '/clients';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getUser(): Observable<User> {
    this.dest = this.API_URL + '/users/me';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public saveUser(userData: User): Observable<User> {
    this._confirmationMsg();

    this.dest = this.API_URL + '/users/me';

    return this.http.post(this.dest, userData, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getConfig(): Observable<any> {
    return this.http.get(this.configUrl)
                    .map((res) => res.json());
  }

  private _confirmationMsg(msg: string = `modifications have been saved`) {
    this.errorDisplayService.display(msg);
  }

}
