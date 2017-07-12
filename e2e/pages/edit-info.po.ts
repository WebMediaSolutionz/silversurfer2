import { browser, element, by } from 'protractor';

// Pages
import { Page } from './page.po';

export class EditInfoPage extends Page {

  private userFirstNameCtrl: any = element(by.id('user_firstname'));

  private userLastNameCtrl: any = element(by.id('user_lastname'));

  private saveCtrl: any = element(by.id('save'));

  constructor() {
    super();
  }

  public load() {
    this.url = 'user';

    super.load();
  }

  public changeUserInfo(firstname: string = 'blah', lastname: string = 'blah'): EditInfoPage {
    this.userFirstNameCtrl.clear().sendKeys(firstname).then( () => {
      this.userLastNameCtrl.clear().sendKeys(lastname).then( () => {
        this.saveCtrl.click();
      });
    });

    return this;
  }
}
