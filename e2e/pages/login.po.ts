import { browser, element, by } from 'protractor';

export class LoginPage {
  constructor() {
    this.getCurrentPage().then((currentPage) => {
      if (currentPage.indexOf('login') === -1) {
        this.logout();
      }
    });
  }

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

  public getErrorMsg() {
    return element(by.css('.mat-simple-snackbar')).getText();
  }

  public fillLoginForm(username: string, password: string): LoginPage {
    let delay: number = 2000;
    let usernameCtrl: any = element(by.id('username'));
    let passwordCtrl: any = element(by.id('password'));
    let submitCtrl: any = element(by.id('submit'));

    browser.sleep(delay);

    usernameCtrl.clear().sendKeys(username).then( () => {
      passwordCtrl.clear().sendKeys(password).then( () => {
        submitCtrl.click();
      });
    });

    return this;
  }

  public logout() {
    let dropdownCtrl: any = element(by.id('dropdown'));
    let logoutCtrl: any = element(by.id('logout'));

    dropdownCtrl.click();
    logoutCtrl.click();
  }
}
