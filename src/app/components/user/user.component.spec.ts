import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

// Components
import { UserComponent } from './user.component';

// Services
import { WebService } from '../../shared/services/web.service';

// Models
import { User } from '../../shared/custom-types/classes/user';

class WebServiceStub {
  public getUser() {
    return Observable.of(new User());
  }

  public saveUser(user: User) {
    return Observable.of(new User());
  }
}

describe('User Component', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: WebService, useClass: WebServiceStub}
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
    it('should invoke WebService.saveUser()', () => {
      let spy = spyOn(component['webService'], 'saveUser').and.callFake(() => {
        return Observable.empty();
      });

      component.post();

      expect(spy).toHaveBeenCalled();
    });
  });
});
