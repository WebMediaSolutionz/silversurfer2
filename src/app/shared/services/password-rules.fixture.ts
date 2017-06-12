import { PasswordRule } from './password-rules.model';

export const PASSWORD_RULES: PasswordRule = new PasswordRule({

  minimumCharacters: 8,

  minimumNonAlpha: false,

  canStartEndNumber: true,

  canContainThreeSequentialTypes: false,

  changesBeforeReuseOld: 10,

  passwordExpireDays: 900,

  passwordAttemptsBeforeLockout: 10,

  lockoutMessage: 'You have been locked out of your account. Please contact Pulse support.'

});
