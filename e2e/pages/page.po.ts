import { browser, element, by } from 'protractor';

export class Page {
  protected url: string;

  protected delayTime: number = 2000;

  protected username: string = 'doctor';

  protected password: string = 'orthodoc';

  protected usernameCtrl: any = element(by.id('username'));

  protected passwordCtrl: any = element(by.id('password'));

  protected submitCtrl: any = element(by.id('submit'));

  protected dropdownCtrl: any = element(by.id('dropdown'));

  protected logoutCtrl: any = element(by.id('logout'));

  constructor() {
    this.load();
  }

  public load() {
    this.navigateTo();

    this.delay();

    this.getCurrentPage().then((currentPage) => {
      if (currentPage.indexOf(this.url) === -1) {
        this.login();
        this.navigateTo();
      }
    });
  }

  public navigateTo(dest: string = this.url) {
    return browser.get(`/${dest}`);
  }

  public delay(timer: number = this.delayTime) {
      browser.sleep(timer);

      return this;
  }

  public getCurrentPage() {
      return browser.getCurrentUrl();
  }

  public getPromptMsg() {
    return element(by.css('.mismatch')).getText();
  }

  public getErrorMsg() {
    return element(by.css('.mat-simple-snackbar')).getText();
  }

  public login(username: string = this.username, password: string = this.password) {
    this.navigateTo('login');

    this.delay();

    this.usernameCtrl.clear().sendKeys(username).then( () => {
      this.passwordCtrl.clear().sendKeys(password).then( () => {
        this.submitCtrl.click();
      });
    });

    return this;
  }

  public logout() {
    this.dropdownCtrl.click();
    this.logoutCtrl.click();
  }
}
