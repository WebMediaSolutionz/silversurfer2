import { EditPasswordRulesPage } from './pages/edit-password-rules.po';

// Test Suite for 'Password Rules Edit' page
describe(`Password Rules Edit page:`, () => {
  let editPasswordRulesPage: EditPasswordRulesPage;

  beforeEach(() => {
    editPasswordRulesPage = new EditPasswordRulesPage();
  });

  it( `should display a success message when the form ` +
      `is filled with correct data and submitted`, () => {
    let textbox1: string = `1`;
    let textbox2: string = `1`;
    let textbox3: string = `1`;
    let textbox4: string = `1`;
    let textarea: string = `blah`;
    let result: string = `Password Rules have been saved`;

    editPasswordRulesPage
      .fillPasswordRulesForm(textbox1, textbox2, textbox3, textbox4, textarea)
      .getErrorMsg().then((txt) => {
        expect(txt.toLowerCase()).toContain(result.toLowerCase());
      });
  });

  it( `should display an error message when the form ` +
      `is filled with incorrect data and submitted`, () => {
    let textbox1: string = `a`;
    let textbox2: string = `a`;
    let textbox3: string = `a`;
    let textbox4: string = `a`;
    let textarea: string = `>`;
    let result: string = `the form is invalid`;

    editPasswordRulesPage
      .fillPasswordRulesForm(textbox1, textbox2, textbox3, textbox4, textarea)
      .getErrorMsg().then((txt) => {
        expect(txt.toLowerCase()).toContain(result.toLowerCase());
      });
  });
});
