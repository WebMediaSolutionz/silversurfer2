import { browser, element, by } from 'protractor';

// Pages
import { Page } from './page.po';

export class LoginPage extends Page {
  constructor() {
    super();
  }

  public load() {
    this.url = 'login';

    this.getCurrentPage().then((currentPage) => {
      if (currentPage.indexOf(this.url) === -1) {
        this.logout();
      }
    });
  }

  public fillLoginForm(username: string, password: string): LoginPage {
    this.login(username, password);

    return this;
  }
}
