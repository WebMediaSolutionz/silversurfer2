import { browser, by, element } from 'protractor';

// Pages
import { LoginPage } from "./pages/login.po";

// Test Suite for 'Password Rules Edit' page
describe(`Password Rules Edit page:`, () => {
  let username: string = 'doctor';
  let password: string = 'orthodoc';
  let delay: number = 2000;

  let usernameCtrl: any = element(by.id('username'));
  let passwordCtrl: any = element(by.id('password'));
  let submitCtrl: any = element(by.id('submit'));

  let passwordRulesTabCtrl: any = element(by.id('md-tab-label-0-5'));

  let textbox1Ctrl: any = element(by.id('textbox1'));
  let textbox2Ctrl: any = element(by.id('textbox2'));
  let textbox3Ctrl: any = element(by.id('textbox3'));
  let textbox4Ctrl: any = element(by.id('textbox4'));
  let textareaCtrl: any = element(by.id('textbox5'));
  let saveCtrl: any = element(by.id('save'));

  let snackbarCtrl: any = element(by.css('.mat-simple-snackbar'));

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

    passwordRulesTabCtrl.click();

    browser.sleep(delay);
  });

  it(`an error message shows up when this field is not numeric`, () => {
    let title: string = `Password Rules`;

    element(by.css('h1')).getText().then((txt) => {
      expect(txt).toContain(title);
    });
  });

  it(`a success message shows up when the form is filled with correct data and submitted`, () => {
    let textbox1: string = `1`;
    let textbox2: string = `1`;
    let textbox3: string = `1`;
    let textbox4: string = `1`;
    let textarea: string = `blah`;
    let result: string = `Password Rules have been saved`;

    textbox1Ctrl.clear().sendKeys(textbox1).then(() => {
      textbox2Ctrl.clear().sendKeys(textbox2).then(() => {
        textbox3Ctrl.clear().sendKeys(textbox3).then(() => {
          textbox4Ctrl.clear().sendKeys(textbox4).then(() => {
            textareaCtrl.clear().sendKeys(textarea).then(() => {
              saveCtrl.click();

              snackbarCtrl.getText().then((txt) => {
                expect(txt.toLowerCase()).toContain(result.toLowerCase());
              });
            });
          });
        });
      });
    });
  });

  it(`a success message shows up when the form is filled with correct data and submitted`, () => {
    let textbox1: string = `a`;
    let textbox2: string = `a`;
    let textbox3: string = `a`;
    let textbox4: string = `a`;
    let textarea: string = `>`;
    let result: string = `the form is invalid`;

    textbox1Ctrl.clear().sendKeys(textbox1).then(() => {
      textbox2Ctrl.clear().sendKeys(textbox2).then(() => {
        textbox3Ctrl.clear().sendKeys(textbox3).then(() => {
          textbox4Ctrl.clear().sendKeys(textbox4).then(() => {
            textareaCtrl.clear().sendKeys(textarea).then(() => {
              saveCtrl.click();

              snackbarCtrl.getText().then((txt) => {
                expect(txt.toLowerCase()).toContain(result.toLowerCase());
              });
            });
          });
        });
      });
    });
  });
});
