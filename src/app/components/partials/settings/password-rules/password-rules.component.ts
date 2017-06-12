import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidationService } from '../../../../shared/services/validation.service';
import { ErrorDisplayService } from '../../../../shared/services/error-display.service';

import { PasswordRule } from '../../../../shared/services/password-rules.model';
import { PasswordRulesService } from '../../../../shared/services/password-rules.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-password-rules',
  templateUrl: './password-rules.component.html',
  styleUrls: ['./password-rules.component.scss']
})
export class PasswordRulesComponent implements OnInit {

  private title: string = 'Password Rules';

  private myForm: FormGroup;

  private isLoading: boolean = false;

  private formSubmitted: boolean = false;

  private triedSubmit: boolean = false;

  private passwordRules: PasswordRule;

  private nbrOfErrors: number = 0;

  constructor(private fb: FormBuilder,
              private passwordRulesService: PasswordRulesService,
              private validationService: ValidationService,
              private errorDisplayService: ErrorDisplayService,
              private router: Router) {

    this.isLoading = true;
    this.formSubmitted = false;
    this.triedSubmit = false;
    this.passwordRules = null;
    this.nbrOfErrors = 0;

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
    this.passwordRulesService.getRules()
      .subscribe((rules) => {
                   console.info('Received password rules', rules);
                   this.isLoading = false;
                   this.passwordRules = rules;
                 },
                 (error) => {
                   this.isLoading = false;
                   this.errorDisplayService.display(error);
                 });
  }

  public resetFormStatus(): void {
    this.nbrOfErrors = 0;
    this.triedSubmit = false;
  }

  public setFormValues( minimumNonAlpha: string,
                        canStartEndNumber: string,
                        canContainThreeSequentialTypes: string,
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

  public onSubmit(passwordRules: PasswordRule, strictValidation: Boolean = false): void {
    if ( this.myForm.valid ) {
      this.formSubmitted = true;

      this.passwordRulesService.saveRules(passwordRules)
        .subscribe((rules) => {
                      console.info( 'Password Rules have been saved.' );
                   },
                   (error) => {
                     this.isLoading = false;
                     this.errorDisplayService.display(error);
                   });
    } else {
      this.errorDisplayService.display('the form is invalid');
      this.triedSubmit = true;
      this.nbrOfErrors = this.errorDisplayService
                            .getErrorCount( this.myForm, strictValidation );
    }
  }

}
