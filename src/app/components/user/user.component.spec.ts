import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

// Components
import { UserComponent } from './user.component';

// Services
import { WebService } from '../../shared/services/web.service';
import { WebServiceStub } from '../../shared/services/web.service.stub';
import { ErrorDisplayService } from '../../shared/services/error-display.service';
import { ErrorDisplayServiceStub } from '../../shared/services/error-display.service.stub';

// Classes
import { User } from '../../shared/custom-types/classes/user';

describe('User Component', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: WebService, useClass: WebServiceStub},
        { provide: ErrorDisplayService, useClass: ErrorDisplayServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    let activeUser: User = new User();

    activeUser.account = 'test';
    activeUser.firstname = 'test';
    activeUser.lastname = 'test';
    activeUser.username = 'test';
    activeUser.password = 'test';

    it('should invoke WebService.getUser() and retrieve the active user', () => {
      let spy = spyOn(component['webService'], 'getUser').and.callFake(() => {
        component['user'] = activeUser;
        return Observable.of(activeUser);
      });

      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
      expect(component['user']).toBe(activeUser);
    });
  });

  describe('post()', () => {
    let activeUser: User = new User();

    activeUser.account = 'test';
    activeUser.firstname = '';
    activeUser.lastname = '';
    activeUser.username = 'test';
    activeUser.password = 'test';

    it('should not invoke WebService.saveUser() when firstname or lastname is left empty', () => {
      let spy1 = spyOn(component['webService'], 'getUser').and.callFake(() => {
        component['user'] = activeUser;
        return Observable.of(activeUser);
      });

      let spy2 = spyOn(component['webService'], 'saveUser').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();
      component.post();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
    });

    it(`should invoke WebService.saveUser() when firstname and lastname aren't empty`, () => {
      activeUser.firstname = 'maxime';
      activeUser.lastname = 'pierre';

      let spy1 = spyOn(component['webService'], 'getUser').and.callFake(() => {
        component['user'] = activeUser;
        return Observable.of(activeUser);
      });

      let spy2 = spyOn(component['webService'], 'saveUser').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();
      component.post();

      expect(spy1).toHaveBeenCalled();
      expect(spy2).toHaveBeenCalled();
    });
  });
});
