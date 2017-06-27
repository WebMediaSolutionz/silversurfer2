import { LoginPage } from './pages/login.page';

describe('Login App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();

    page.navigateTo();
  });

  it(`should display error message if the credentials are wrong`, () => {
    let username: string = 'aaa';
    let password: string = 'bnhb';
    let delay: number = 2000;
    let errorMsg;

    page.delay(delay)
        .fillLoginForm(username, password)
        .delay(delay);

    page.getCurrentPage().then((url) => {
      expect(url).toContain('login');
    });
  });

  it(`should redirect user to dashboard page if credentials are right`, () => {
    let username: string = 'doctor';
    let password: string = 'orthodoc';
    let delay: number = 2000;
    let errorMsg;

    page.delay(delay)
        .fillLoginForm(username, password)
        .delay(delay);

    page.getCurrentPage().then((url) => {
      expect(url).toContain('dashboard');
    });
  });
});
