import { browser, element, by } from 'protractor';

export class LoginPage {
  public navigateTo() {
    return browser.get('/login');
  }

  public delay(timer: number) {
      browser.sleep(timer);

      return this;
  }

  public getCurrentPage() {
      return browser.getCurrentUrl();
  }

  public fillLoginForm(username: string, password: string): LoginPage {
    let usernameCtrl: any = element(by.id('username'));
    let passwordCtrl: any = element(by.id('password'));
    let submitCtrl: any = element(by.id('submit'));

    usernameCtrl.sendKeys(username).then( () => {
      passwordCtrl.sendKeys(password).then( () => {
        submitCtrl.click();
      });
    });

    return this;
  }
}
