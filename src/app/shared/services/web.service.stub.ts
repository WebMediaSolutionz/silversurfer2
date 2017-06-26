import { Observable } from 'rxjs';

// Classes
import { User } from '../custom-types/classes/user';

export class WebServiceStub {
  public getPasswordRules() {
    //   get password rules
  }

  public savePasswordRules(passwordRule: any) {
    //   save password rules
  }

  public getConfig() {
    return Observable.empty();
  }

  public getClients() {
    return Observable.empty();
  }

  public getUser() {
    return Observable.of(new User());
  }

  public saveUser(user: User) {
    return Observable.empty();
  }
}
