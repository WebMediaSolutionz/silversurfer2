import { browser, element, by } from 'protractor';

describe('Edit Info Page', () => {
  let username: string = 'doctor';
  let password: string = 'orthodoc';
  let delay: number = 2000;
  let errorMsg;

  let usernameCtrl: any = element(by.id('username'));
  let passwordCtrl: any = element(by.id('password'));
  let submitCtrl: any = element(by.id('submit'));

  let userFirstNameCtrl: any = element(by.id('user_firstname'));
  let userLastNameCtrl: any = element(by.id('user_lastname'));
  let saveCtrl: any = element(by.id('save'));

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

    browser.get('/user');
  });

  it(`should display confirmation message after changing password`, () => {
		userFirstNameCtrl.clear().sendKeys('max').then( () => {
			userLastNameCtrl.clear().sendKeys('max').then( () => {
				saveCtrl.click();

				element(by.css('.mat-simple-snackbar')).getText().then((errorMsg) => {
					expect(errorMsg).toContain('modifications have been saved');
				});
			});
		});
  });
});
