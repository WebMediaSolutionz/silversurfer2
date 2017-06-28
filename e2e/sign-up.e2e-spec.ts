import { SignUpPage } from './pages/sign-up.page';

// Classes
import { User } from "../src/app/shared/custom-types/classes/user";

describe('SignUp Page', () => {
  let page: SignUpPage;

  beforeEach(() => {
    page = new SignUpPage();

    page.navigateTo();
  });

  it(`should signup user, log him in and redirect him to the dashboard page`, () => {
    let user = {
        account: 'QB1486',
        firstname: 'aaa',
        lastname: 'aaa',
        username: 'aaa',
        password: 'aaa'
    };
    
    let delay = 2000;

    page.delay(delay)
        .signUpUser(user)
        .delay(delay);

    page.getCurrentPage().then((url) => {
      expect(url).toContain('dashboard');
    });
  });
});
