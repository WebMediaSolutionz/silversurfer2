import { LoginPage } from './pages/login.po';

describe('Login Page', () => {
  let loginPage: LoginPage;
  let username: string;
  let password: string;
  let errorMsg: string;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it(`should display error message if the credentials are wrong`, () => {
    username = 'aaa';
    password = 'bnhb';
    errorMsg = 'Email or Password incorrect';

    loginPage
      .fillLoginForm(username, password)
      .getCurrentPage().then((url) => {
        expect(url).toContain('login');

        loginPage.getErrorMsg().then((err) => {
          expect(err).toContain(errorMsg);
        });
      });
  });

  it(`should redirect user to dashboard page if credentials are right`, () => {
    username = 'doctor';
    password = 'orthodoc';

    loginPage
      .fillLoginForm(username, password)
      .getCurrentPage().then((url) => {
        expect(url).toContain('dashboard');

        loginPage.logout();
      });
  });
});
