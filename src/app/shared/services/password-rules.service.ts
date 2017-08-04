import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Services
import { ErrorDisplayService } from './error-display.service';
import { WebService } from './web.service';

import { PasswordRules } from '../custom-types/classes/password-rules';

@Injectable()
export class PasswordRulesService {

  constructor(private errorDisplayService: ErrorDisplayService,
              private webService: WebService) {
  }

  public getRules(): Observable<PasswordRules> {
    return this.webService.getPasswordRules();
  }

  public saveRules(passwordRule: PasswordRules): Observable<any> {
    return this.webService.savePasswordRules(passwordRule);
  }

}
