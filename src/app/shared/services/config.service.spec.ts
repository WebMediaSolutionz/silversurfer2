import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { Observable } from 'rxjs';

// Services
import { ConfigService } from './config.service';
import { WebService } from './web.service';
import { RouterStub } from './router.service.stub';
import { WebServiceStub } from './web.service.stub';

describe('Config Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        { provide: WebService, useClass: WebServiceStub },
        { provide: Location, useClass: SpyLocation },
        { provide: Router, useClass: RouterStub }
      ]
    });
  });

  describe('constructor()', () => {
    it('should be initialized and get the current URL path', inject(
      [ConfigService, WebService, Location],
      (service: ConfigService) => {
        expect(service).toBeTruthy();
        expect(service['activeLink']).not.toBeNull();
      }
    ));
  });

  describe('getConfig()', () => {
    it('should invoke Http.get to retrieve the app config', inject(
      [ConfigService, WebService, Location],
      (service: ConfigService) => {
        let spy = spyOn(service['webService'], 'getConfig').and.callFake(() => {
          return Observable.empty();
        });

        service.getConfig();

        expect(spy).toHaveBeenCalled();
      }
    ));
  });
});
