import { SignUpPage } from './pages/sign-up.po';

describe('SignUp Page', () => {
  let signUpPage: SignUpPage;
  let user;

  beforeEach(() => {
    signUpPage = new SignUpPage();

    user = {
      account: 'QB1486',
      firstname: 'aaa',
      lastname: 'aaa',
      username: 'aaa',
      password: 'aaa'
    };
  });

  it(`should sign up dummy user, log him in and redirect him to the dashboard page`, () => {
    signUpPage.signUpUser(user);

    signUpPage.getCurrentPage().then((url) => {
      expect(url).toContain('dashboard');

      signUpPage.logout();
    });
  });

  it(	`should display error prompt if user enters different text in ` +
      `"Password" field and "Confirm Password" field`, () => {
    let confirmPassword: string = 'bbb';
    let promptMsg: string = 'Passwords do not match';
    let errorMsg: string = 'Some entries are invalid';

    signUpPage.fillSignUpForm(
      user.account,
      user.firstname,
      user.lastname,
      user.username,
      user.password,
      confirmPassword
    );

    signUpPage.getCurrentPage().then((url) => {
      expect(url).toContain('signup');

      signUpPage.getPromptMsg().then((prompt) => {
        expect(prompt.toLowerCase()).toContain(promptMsg.toLowerCase());

        signUpPage.getErrorMsg().then((err) => {
          expect(err.toLowerCase()).toContain(errorMsg.toLowerCase());
        });
      });
    });
  });
});
