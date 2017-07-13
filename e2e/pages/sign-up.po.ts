import { browser, element, by } from 'protractor';

// Page
import { Page } from './page.po';

export class SignUpPage extends Page {

  private signUpAccountCtrl: any = element(by.id('account'));

  private signUpFirstnameCtrl: any = element(by.id('firstname'));

  private signUpLastnameCtrl: any = element(by.id('lastname'));

  private signUpUsernameCtrl: any = element(by.id('username'));

  private signUpPasswordCtrl: any = element(by.id('password'));

  private signUpConfirmPasswordCtrl: any = element(by.id('confirmPassword'));

  private signUpSubmitCtrl: any = element(by.id('submit'));

  constructor() {
    super();
  }

  public load() {
    this.url = 'signup';

    this.getCurrentPage().then((currentPage) => {
      if (currentPage.indexOf(this.url) === -1 && currentPage.indexOf('login') === -1) {
        this.logout();
      }

      this.navigateTo();
    });
  }

  public fillSignUpForm(
    account: string,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    confirmPassword: string): SignUpPage {
    this.delay();

    this.signUpAccountCtrl.clear().sendKeys(account).then( () => {
      this.signUpFirstnameCtrl.clear().sendKeys(firstname).then( () => {
        this.signUpLastnameCtrl.clear().sendKeys(lastname).then( () => {
          this.signUpUsernameCtrl.clear().sendKeys(username).then( () => {
            this.signUpPasswordCtrl.clear().sendKeys(password).then( () => {
              this.signUpConfirmPasswordCtrl.clear().sendKeys(confirmPassword).then( () => {
                this.signUpSubmitCtrl.click();
              });
            });
          });
        });
      });
    });

    this.delay();

    return this;
  }

  public getPromptMsg() {
    return element(by.id('mismatch')).getText();
  }

  public signUpUser(user: any): SignUpPage {
    this.delay();

    this.signUpAccountCtrl.clear().sendKeys(user.account).then( () => {
      this.signUpFirstnameCtrl.clear().sendKeys(user.firstname).then( () => {
        this.signUpLastnameCtrl.clear().sendKeys(user.lastname).then( () => {
          this.signUpUsernameCtrl.clear().sendKeys(user.username).then( () => {
            this.signUpPasswordCtrl.clear().sendKeys(user.password).then( () => {
              this.signUpConfirmPasswordCtrl.clear().sendKeys(user.password).then( () => {
                this.signUpSubmitCtrl.click();
              });
            });
          });
        });
      });
    });

    this.delay();

    return this;
  }
}
