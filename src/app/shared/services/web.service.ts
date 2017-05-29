import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

import { AuthService } from './auth.service';

@Injectable()
export class WebService {

  public messages;

  private BASE_URL = 'http://localhost:63145/api';

  private messageStore = [];

  private messageSubject = new Subject();

  constructor(private http: Http,
              private sb: MdSnackBar,
              private authService: AuthService) {
    this.messages = this.messageSubject.asObservable();

    this.getMessages();
  }

  public getMessages(user: string = ``) {
    user = (user) ? `/${user}` : ``;
    this.http
        .get( this.BASE_URL + '/messages' + user)
        .subscribe(
          (response) => {
            this.messageStore = response.json();
            this.messageSubject.next(this.messageStore);
          },
          (error) => {
            this.handleError(`unable to get messages`);
          });
  }

  public postMessage(message) {
    this.http
      .post( this.BASE_URL + '/messages', message)
      .subscribe(
        (response) => {
          this.messageStore.push(response.json());
          this.messageSubject.next(this.messageStore);
        },
        (error) => {
          this.handleError(`unable to post messages`);
        });
  }

  public getUser(): any {
    return this.http.get(this.BASE_URL + '/users/me', this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public saveUser(userData: any): any {
    return this.http.post(this.BASE_URL + '/users/me', userData, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  private handleError(error) {
    console.error(error);
    this.sb.open(error, 'close', {duration: 2000});
  }
}
