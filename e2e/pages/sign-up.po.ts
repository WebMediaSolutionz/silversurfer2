import { browser, element, by } from 'protractor';

export class SignUpPage {
  constructor() {
		this.navigateTo();
	}

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

	public getPromptMsg() {
		return element(by.css('.mismatch')).getText();
	}

	public getErrorMsg() {
    return element(by.css('.mat-simple-snackbar')).getText();
  }

  public fillSignUpForm(account: string, firstname: string, lastname: string, username: string, password: string, confirmPassword: string): SignUpPage {
		let delay = 2000;
    let accountCtrl: any = element(by.id('account'));
    let firstnameCtrl: any = element(by.id('firstname'));
    let lastnameCtrl: any = element(by.id('lastname'));
    let usernameCtrl: any = element(by.id('username'));
    let passwordCtrl: any = element(by.id('password'));
    let confirmPasswordCtrl: any = element(by.id('confirmPassword'));
    let submitCtrl: any = element(by.id('submit'));

		this.delay(delay);

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

		this.delay(delay);

    return this;
  }

  public signUpUser(user: any): SignUpPage {
		let delay = 2000;
    let accountCtrl: any = element(by.id('account'));
    let firstnameCtrl: any = element(by.id('firstname'));
    let lastnameCtrl: any = element(by.id('lastname'));
    let usernameCtrl: any = element(by.id('username'));
    let passwordCtrl: any = element(by.id('password'));
    let confirmPasswordCtrl: any = element(by.id('confirmPassword'));
    let submitCtrl: any = element(by.id('submit'));
		this.delay(delay);

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

		this.delay(delay);

    return this;
  }

  public logout() {
    let dropdownCtrl: any = element(by.id('dropdown'));
    let logoutCtrl: any = element(by.id('logout'));

    dropdownCtrl.click();
    logoutCtrl.click();
  }
}
