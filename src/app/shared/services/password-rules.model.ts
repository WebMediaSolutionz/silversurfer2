
export class PasswordRule {

  public minimumCharacters: number;

  public minimumNonAlpha: number;

  public canStartEndNumber: boolean;

  public canContainThreeSequentialTypes: boolean;

  public changesBeforeReuseOld: number;

  public passwordExpireDays: number;

  public passwordAttemptsBeforeLockout: number;

  public lockoutMessage: string;

  constructor(rule?: any) {
    this.minimumCharacters = rule.minimumCharacters;
    this.minimumNonAlpha = rule.minimumNonAlpha;
    this.canStartEndNumber = rule.canStartEndNumber;
    this.canContainThreeSequentialTypes = rule.canContainThreeSequentialTypes;
    this.changesBeforeReuseOld = rule.changesBeforeReuseOld;
    this.passwordExpireDays = rule.passwordExpireDays;
    this.passwordAttemptsBeforeLockout = rule.passwordAttemptsBeforeLockout;
    this.lockoutMessage = rule.lockoutMessage;
  }

}
