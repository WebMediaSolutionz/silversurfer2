import { EditInfoPage } from './pages/edit-info.po';

describe('Edit Info Page', () => {
  let editInfoPage: EditInfoPage;

  beforeEach(() => {
    editInfoPage = new EditInfoPage();
  });

  it( `should display error message if either the firstname ` +
      `or lastname is left empty upon form submission`, () => {
    let result: string = 'Some entries are invalid';

    editInfoPage
      .clearFormandSubmit()
      .getErrorMsg().then((err) => {
        editInfoPage.delay();

        expect(err.toLowerCase()).toContain(result.toLowerCase());
      });
  });

  it(`should display confirmation message after changing user information`, () => {
    let result: string = 'modifications have been saved';

    editInfoPage
      .changeUserInfo()
      .getErrorMsg().then((err) => {
        editInfoPage.delay(500);

        expect(err.toLowerCase()).toContain(result.toLowerCase());
      });
  });
});
