import { EditInfoPage } from './pages/edit-info.po';

describe('Edit Info Page', () => {
  let editInfoPage: EditInfoPage;

  beforeEach(() => {
    editInfoPage = new EditInfoPage();
  });

  it(`should display confirmation message after changing user information`, () => {
    editInfoPage
      .changeUserInfo()
      .getErrorMsg().then((err) => {
        editInfoPage.delay(500);

        expect(err).toContain('modifications have been saved');
      });
  });
});
