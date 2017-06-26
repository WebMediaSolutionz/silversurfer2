import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs';

// Components
import { AppComponent } from './app.component';

// Services
import { ConfigService } from './shared/services/config.service';

// Pipes
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

const configs = {
  product: 'PulseCloud',
  account: 'QB1486',
  errorDuration: 2000
};

class ConfigServiceStub {
  public getConfig() {
    return Observable.of(configs);
  }
}

describe('App Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CapitalizePipe
      ],
      imports: [
        MaterialModule
      ],
      providers: [
        { provide: ConfigService, useClass: ConfigServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it( 'should invoke ConfigService.getConfig to get config ' +
        'data and saving it in local storage', () => {
      let spy = spyOn(component['configService'], 'getConfig').and.callFake(() => {
        return Observable.of(configs);
      });

      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
      expect(localStorage.getItem('product')).toBe(configs.product);
      expect(localStorage.getItem('account')).toBe(configs.account);
      expect(parseInt(localStorage.getItem('errorDuration'), 10)).toBe(configs.errorDuration);
    });
  });
});
