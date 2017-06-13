import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from "rxjs";
import { NO_ERRORS_SCHEMA } from "@angular/core";

// Components
import { PracticesAndRolesComponent } from './practices-and-roles.component';

// Services
import { WebService } from "../../../../shared/services/web.service";

// Pipes
import { CapitalizePipe } from "../../../../shared/pipes/capitalize.pipe";

class WebServiceStub {
  getClients() {
    return Observable.empty();
  }
}

describe('PracticesAndRoles Component', () => {
  let component: PracticesAndRolesComponent;
  let fixture: ComponentFixture<PracticesAndRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PracticesAndRolesComponent,
        CapitalizePipe  
      ],
      providers: [
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(PracticesAndRolesComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it('should invoke WebService.getClients and get the clients', () => {
      let spy = spyOn(component['webService'], 'getClients').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();
      
      expect(spy).toHaveBeenCalled();
    });
  });
});
