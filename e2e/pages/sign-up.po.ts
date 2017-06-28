import { browser, element, by } from 'protractor';

// Classes
import { User } from "../../src/app/shared/custom-types/classes/user";

export class SignUpPage {
  public navigateTo() {
    return browser.get('/signup');
  }

  public delay(timer: number) {
      browser.sleep(timer);

      return this;
  }

  public getCurrentPage() {
      return browser.getCurrentUrl();
  }

  public fillSignUpForm(account: string, firstname: string, lastname: string, username: string, password: string, confirmPassword: string): SignUpPage {
    let accountCtrl: any = element(by.id('account'));
    let firstnameCtrl: any = element(by.id('firstname'));
    let lastnameCtrl: any = element(by.id('lastname'));
    let usernameCtrl: any = element(by.id('username'));
    let passwordCtrl: any = element(by.id('password'));
    let confirmPasswordCtrl: any = element(by.id('confirmPassword'));

    let submitCtrl: any = element(by.id('submit'));

    accountCtrl.sendKeys(firstname).then( () => {
        firstnameCtrl.sendKeys(firstname).then( () => {
            lastnameCtrl.sendKeys(lastname).then( () => {
                usernameCtrl.sendKeys(username).then( () => {
                    passwordCtrl.sendKeys(password).then( () => {
                        confirmPasswordCtrl.sendKeys(confirmPassword).then( () => {
                            submitCtrl.click();
                        });
                    });
                });
            });
        });
    });

    return this;
  }

  public signUpUser(user: User): SignUpPage {
    let accountCtrl: any = element(by.id('account'));
    let firstnameCtrl: any = element(by.id('firstname'));
    let lastnameCtrl: any = element(by.id('lastname'));
    let usernameCtrl: any = element(by.id('username'));
    let passwordCtrl: any = element(by.id('password'));
    let confirmPasswordCtrl: any = element(by.id('confirmPassword'));

    let submitCtrl: any = element(by.id('submit'));

    accountCtrl.sendKeys(user.account).then( () => {
        firstnameCtrl.sendKeys(user.firstname).then( () => {
            lastnameCtrl.sendKeys(user.lastname).then( () => {
                usernameCtrl.sendKeys(user.username).then( () => {
                    passwordCtrl.sendKeys(user.password).then( () => {
                        confirmPasswordCtrl.sendKeys(user.password).then( () => {
                            submitCtrl.click();
                        });
                    });
                });
            });
        });
    });

    return this;
  }
}
