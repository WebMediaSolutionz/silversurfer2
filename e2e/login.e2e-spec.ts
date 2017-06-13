// loading Page
import { LoginPage } from './pages/login.page';

// Test Suite for 'Dashboard' page
xdescribe(`LoginPage page:`, () => {
  let loginPage: LoginPage;

  beforeEach( () => {
    loginPage = new LoginPage();

    loginPage.load();
  });

  it(`should allow the user access if right credentials are entered`, () => {
    let username = '';
    let password = '';

    loginPage.fillLoginForm(username, password);

    expect(true).toBeTruthy();
  });
});
