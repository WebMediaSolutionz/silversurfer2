import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Services
import { ErrorDisplayService } from './error-display.service';
import { WebService } from './web.service';

import { PasswordRule } from './password-rules.model';

@Injectable()
export class PasswordRulesService {

  constructor(private errorDisplayService: ErrorDisplayService,
              private webService: WebService) {
  }

  public getRules(): Observable<PasswordRule> {
    return this.webService.getPasswordRules();
  }

  public saveRules(passwordRule: PasswordRule): Observable<any> {
    return this.webService.savePasswordRules(passwordRule);
  }

}
