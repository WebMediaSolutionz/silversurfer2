import { TestBed, inject } from '@angular/core/testing';

// Services
import { PasswordRulesService } from './password-rules.service';
import { ErrorDisplayService } from './error-display.service';
import { ErrorDisplayServiceStub } from './error-display.service.stub';
import { WebService } from './web.service';
import { WebServiceStub } from './web.service.stub';

describe('PasswordRules Service', () => {
  let passwordRulesService: PasswordRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PasswordRulesService,
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub },
        { provide: WebService, useClass: WebServiceStub }
      ]
    });
  });

  describe(`constructor()`, () => {
    it('should be initialized', inject(
      [PasswordRulesService, ErrorDisplayService, WebService],
      (service: PasswordRulesService) => {
        expect(service).toBeDefined();
      }
    ));
  });

  describe(`getRules()`, () => {
    it('should invoke WebService.getPasswordRules to get the password rules', inject(
      [PasswordRulesService, ErrorDisplayService, WebService],
      (service: PasswordRulesService) => {
        let spy = spyOn(service['webService'], 'getPasswordRules');

        service.getRules();

        expect(spy).toHaveBeenCalled();
      }
    ));
  });

  describe(`saveRules()`, () => {
    it('should invoke WebService.savePasswordRules to save the password rules', inject(
      [PasswordRulesService, ErrorDisplayService, WebService],
      (service: PasswordRulesService) => {
        let spy = spyOn(service['webService'], 'savePasswordRules');

        service.saveRules(null);

        expect(spy).toHaveBeenCalled();
      }
    ));
  });
});
