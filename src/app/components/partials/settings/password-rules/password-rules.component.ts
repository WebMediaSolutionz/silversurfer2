import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// Services
import { ValidationService } from '../../../../shared/services/validation.service';
import { ErrorDisplayService } from '../../../../shared/services/error-display.service';
import { PasswordRulesService } from '../../../../shared/services/password-rules.service';
import { ConfigService } from '../../../../shared/services/config.service';

// Classes
import { PasswordRules } from '../../../../shared/custom-types/classes/password-rules';
import { User } from '../../../../shared/custom-types/classes/user';

@Component({
  moduleId: module.id,
  selector: 'ss2-password-rules',
  templateUrl: 'password-rules.component.html',
  styleUrls: ['password-rules.component.scss']
})
export class PasswordRulesComponent implements OnInit {

  private title: string = 'Password Rules';

  private myForm: FormGroup;

  private isLoading: boolean = false;

  private formSubmitted: boolean = false;

  private triedSubmit: boolean = false;

  private passwordRules: PasswordRules;

  private nbrOfErrors: number = 0;

  private editMode: boolean = false;

  constructor(private fb: FormBuilder,
              private passwordRulesService: PasswordRulesService,
              private validationService: ValidationService,
              private errorDisplayService: ErrorDisplayService,
              private configService: ConfigService) {

    this.isLoading = true;
    this.formSubmitted = false;
    this.triedSubmit = false;
    this.passwordRules = null;
    this.nbrOfErrors = 0;

    // creation of reactive form with basic and custom validation
    this.myForm = fb.group({
      minimumNonAlpha: [''],
      canStartEndNumber: [''],
      canContainThreeSequentialTypes: [''],
      minimumCharacters: [
        '',
        Validators.compose([
          Validators.required,
          this.validationService.isPositiveInteger
        ])
      ],
      changesBeforeReuseOld: [
        '',
        Validators.compose([
          Validators.required,
          this.validationService.isPositiveInteger
        ])
      ],
      passwordExpireDays: [
        '',
        Validators.compose([
          Validators.required,
          this.validationService.isPositiveInteger
        ])
      ],
      passwordAttemptsBeforeLockout: [
        '',
        Validators.compose([
          Validators.required,
          this.validationService.isPositiveInteger
        ])
      ],
      lockoutMessage: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          this.validationService.specialCharValidator
        ])
      ]
    });

    this.myForm.valueChanges
      .subscribe( () => this.resetFormStatus() );
  }

  public ngOnInit(): void {
    this.loadRules();
  }

  public loadRules(): void {
    // retreiving password rules
    this.passwordRulesService.getRules()
      .subscribe((rules) => {
                    this.isLoading = false;
                    this.passwordRules = rules;

                    // initializing form values with the retrieved password rules
                    this.setFormValues(
                      this.passwordRules.minimumNonAlpha,
                      this.passwordRules.canStartEndNumber,
                      this.passwordRules.canContainThreeSequentialTypes,
                      this.passwordRules.minimumCharacters.toString(),
                      this.passwordRules.changesBeforeReuseOld.toString(),
                      this.passwordRules.passwordExpireDays.toString(),
                      this.passwordRules.passwordAttemptsBeforeLockout.toString(),
                      this.passwordRules.lockoutMessage
                    );
                 },
                 (error) => {
                  //  password rules could not be retrieved, displaying error prompt
                   this.isLoading = false;
                   this.errorDisplayService.display(error);
                 });
  }

  public resetFormStatus(): void {
    this.nbrOfErrors = 0;
    this.triedSubmit = false;
  }

  public setFormValues( minimumNonAlpha: boolean,
                        canStartEndNumber: boolean,
                        canContainThreeSequentialTypes: boolean,
                        minimumCharacters: string,
                        changesBeforeReuseOld: string,
                        passwordExpireDays: string,
                        passwordAttemptsBeforeLockout: string,
                        lockoutMessage: string): PasswordRulesComponent {
    this.myForm.get('minimumNonAlpha').setValue(minimumNonAlpha);
    this.myForm.get('canStartEndNumber').setValue(canStartEndNumber);
    this.myForm.get('canContainThreeSequentialTypes').setValue(canContainThreeSequentialTypes);
    this.myForm.get('minimumCharacters').setValue(minimumCharacters);
    this.myForm.get('changesBeforeReuseOld').setValue(changesBeforeReuseOld);
    this.myForm.get('passwordExpireDays').setValue(passwordExpireDays);
    this.myForm.get('passwordAttemptsBeforeLockout').setValue(passwordAttemptsBeforeLockout);
    this.myForm.get('lockoutMessage').setValue(lockoutMessage);

    return this;
  }

  public onSubmit(passwordRules: PasswordRules, strictValidation: Boolean = false): void {
    if ( this.myForm.valid ) {
      this.formSubmitted = true;

      // form is valid, saving password rules
      this.passwordRulesService.saveRules(passwordRules)
        .subscribe(
          (rules) => {
            let confirm = 'Password Rules have been saved.';
            this.errorDisplayService.display(confirm);
            this.passwordRules = rules;
            this.editMode = false;
          },
          (error) => {
            // error, password rules could not be saved
            this.isLoading = false;
            this.errorDisplayService.display(error);
          });
    } else {
      // form was invalid
      this.errorDisplayService.display('Some entries are invalid');
      this.triedSubmit = true;
      this.nbrOfErrors = this.errorDisplayService
                            .getErrorCount( this.myForm, strictValidation );
    }
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;

    this.title = (this.editMode) ? 'Edit Password Rules' : 'Password Rules';
  }

}
