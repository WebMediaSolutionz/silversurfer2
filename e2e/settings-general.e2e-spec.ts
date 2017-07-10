import { browser, element, by } from 'protractor';

// Pages
import { LoginPage } from './pages/login.po';

describe('Settings Page (General)', () => {
  let username: string = 'doctor';
  let password: string = 'orthodoc';
  let delay: number = 2000;
  let errorMsg;

  let usernameCtrl: any = element(by.id('username'));
  let passwordCtrl: any = element(by.id('password'));
  let submitCtrl: any = element(by.id('submit'));

  let currentPasswordCtrl: any = element(by.id('password'));
  let newPasswordCtrl: any = element(by.id('newPassword'));
  let confirmNewPasswordCtrl: any = element(by.id('confirmNewPassword'));
  let resetCtrl: any = element(by.id('reset'));

  beforeEach(() => {
    browser.get('/login');

    browser.sleep(delay);

    browser.getCurrentUrl().then((url) => {
      if (url.indexOf('login') !== -1) {
        usernameCtrl.sendKeys(username).then( () => {
          passwordCtrl.sendKeys(password).then( () => {
            submitCtrl.click();
          });
        });

        browser.sleep(delay);
      }
    });

    browser.get('/settings');
  });

  it(`should display confirmation message after changing password`, () => {
    currentPasswordCtrl.sendKeys('orthodoc').then( () => {
        newPasswordCtrl.sendKeys('orthodoc').then( () => {
            confirmNewPasswordCtrl.sendKeys('orthodoc').then( () => {
                resetCtrl.click();

                element(by.css('.mat-simple-snackbar')).getText().then((err) => {
                    expect(err).toContain('modifications have been saved');
                });
            });
        });
    });
  });

  it(`should display error message when new password and confirm new password dont match`, () => {
    currentPasswordCtrl.sendKeys('orthodoc').then( () => {
        newPasswordCtrl.sendKeys('orthodoc').then( () => {
            confirmNewPasswordCtrl.sendKeys('orthodoc1').then( () => {
                resetCtrl.click();

                element(by.css('.mat-simple-snackbar')).getText().then((err) => {
                    expect(err).toContain('Some entries are invalid');
                });
            });
        });
    });
  });

  it(`should display error message when wrong password is entered`, () => {
    currentPasswordCtrl.sendKeys('oxoxo').then( () => {
        newPasswordCtrl.sendKeys('orthodoc').then( () => {
            confirmNewPasswordCtrl.sendKeys('orthodoc').then( () => {
                resetCtrl.click();

                element(by.css('.mat-simple-snackbar')).getText().then((err) => {
                    expect(err).toContain('Email or Password incorrect');
                });
            });
        });
    });
  });

  it(`should display error message when fields are left empty`, () => {
    resetCtrl.click();

    element(by.css('.mat-simple-snackbar')).getText().then((err) => {
        expect(err).toContain('Email or Password incorrect');
    });
  });
});
