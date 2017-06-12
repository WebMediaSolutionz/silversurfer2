import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ErrorDisplayService } from './error-display.service';

import { PasswordRule } from './password-rules.model';
import { PASSWORD_RULES } from './password-rules.fixture';

@Injectable()
export class PasswordRulesService {

  constructor(private http: Http,
              private errorDisplayService: ErrorDisplayService) {
  }

  public getRules(): Observable<any> {
    return Observable.of(new PasswordRule(PASSWORD_RULES));
  }

  public saveRules(passwordRule: PasswordRule): Observable<any> {
    let bodyString = JSON.stringify(passwordRule);
    console.info(`Sending 'http.put' of body ${bodyString}`);

    return Observable.of(passwordRule)
      .catch((error: any) => {
        this.errorDisplayService.display(error);
        return Observable.throw(error.json().error || 'Server error');
      });
  }

}
