import { SettingsGeneralPage } from './pages/settings-general.po';

describe('Settings Page (General)', () => {
  let settingsGeneralPage: SettingsGeneralPage;

  beforeEach(() => {
    settingsGeneralPage = new SettingsGeneralPage();
  });

  it(`should display confirmation message after changing password`, () => {
    let result: string = 'modifications have been saved';

    settingsGeneralPage
      .changePassword()
      .getErrorMsg().then((err) => {
        expect(err.toLowerCase()).toContain(result.toLowerCase());
      });
  });

  it(`should display error message when new password and confirm new password dont match`, () => {
    let currentPassword: string = 'orthodoc';
    let newPassword: string = 'orthodoc';
    let confirmNewPassword: string = 'orthodoc1';
    let result: string = 'Some entries are invalid';
    let promptMsg: string = 'Passwords do not match';

    settingsGeneralPage
      .changePassword(currentPassword, newPassword, confirmNewPassword)
      .getErrorMsg().then((err) => {
        expect(err).toContain(result);

        settingsGeneralPage.getPromptMsg().then((prompt) => {
          expect(prompt.toLowerCase()).toContain(promptMsg.toLowerCase());
        });
      });
  });

  it(`should display error message when wrong password is entered`, () => {
    let currentPassword: string = 'xoxoxo';
    let newPassword: string = 'orthodoc';
    let confirmNewPassword: string = 'orthodoc';
    let result: string = 'Email or Password incorrect';

    settingsGeneralPage
      .changePassword(currentPassword, newPassword, confirmNewPassword)
      .getErrorMsg().then((err) => {
        expect(err).toContain(result);
      });
  });

  it(`should display error message when fields are left empty`, () => {
    let result: string = 'Email or Password incorrect';

    settingsGeneralPage
      .submitForm()
      .getErrorMsg().then((prompt) => {
        expect(prompt.toLowerCase()).toContain(result.toLowerCase());
      });
  });
});
