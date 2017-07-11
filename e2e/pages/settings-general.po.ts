import { browser, element, by } from 'protractor';

// Pages
import { Page } from './page.po';

export class SettingsGeneralPage extends Page {

  private currentPasswordCtrl: any = element(by.id('password'));

  private newPasswordCtrl: any = element(by.id('newPassword'));

  private confirmNewPasswordCtrl: any = element(by.id('confirmNewPassword'));

  private resetCtrl: any = element(by.id('reset'));

  constructor() {
    super();
  }

  public load() {
    this.url = 'settings';

    super.load();
  }

  public submitForm(): SettingsGeneralPage {
    this.resetCtrl.click();

    return this;
  }

  public changePassword(currentPassword: string,
                        newPassword: string,
                        confirmNewPassword: string): SettingsGeneralPage {
    this.currentPasswordCtrl.clear().sendKeys(currentPassword).then( () => {
      this.newPasswordCtrl.clear().sendKeys(newPassword).then(() => {
        this.confirmNewPasswordCtrl.clear().sendKeys(confirmNewPassword).then( () => {
          this.resetCtrl.click();
        });
      });
    });

    return this;
  }
}
