import { browser, element, by } from 'protractor';

// Pages
import { Page } from './page.po';

export class EditInfoPage extends Page {
  constructor() {
    super();
  }

  public load() {
    this.url = 'user';

    super.load();
  }

  public changeUserInfo(firstname: string = 'maxime', lastname: string = 'pierre'): EditInfoPage {
    let userFirstNameCtrl: any = element(by.id('user_firstname'));

    let userLastNameCtrl: any = element(by.id('user_lastname'));

    let saveCtrl: any = element(by.id('save'));

    userFirstNameCtrl.clear().sendKeys(firstname).then(() => {
      this.delay(1000);

      userLastNameCtrl.clear().sendKeys(lastname).then(() => {
        this.delay(1000);

        saveCtrl.click();
      });
    });

    return this;
  }

  public clearFormandSubmit() {
    let userFirstNameCtrl: any = element(by.id('user_firstname'));

    let userLastNameCtrl: any = element(by.id('user_lastname'));

    let saveCtrl: any = element(by.id('save'));

    userFirstNameCtrl.clear().sendKeys(' ').then(() => {
      this.delay(1000);

      userLastNameCtrl.clear().sendKeys(' ').then(() => {
        this.delay(1000);

        saveCtrl.click();
      });
    });

    return this;
  }
}
