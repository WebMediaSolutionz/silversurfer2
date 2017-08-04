import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../shared/services/auth.service';
import { ErrorDisplayService } from '../../shared/services/error-display.service';

// Classes
import { User } from '../../shared/custom-types/classes/user';
import { Attributes } from '../../shared/custom-types/classes/attributes';

@Component({
  moduleId: module.id,
  selector: 'ss2-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private title: string = 'sign up';

  private form: FormGroup;

  private accountFieldAttr: Attributes;

  private firstNameFieldAttr: Attributes;

  private lastNameFieldAttr: Attributes;

  private userNameFieldAttr: Attributes;

  private passwordFieldAttr: Attributes;

  private confirmPasswordFieldAttr: Attributes;

  private errorDuration: number;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private errorDisplayService: ErrorDisplayService) {}

  public ngOnInit(): void {
    // if user is logged in, he's redirected to the "dashboard"
    // TODO: make "landingPage" a configuration setting of the app
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    }

    // initialize form values
    this._initializeForm();

    // reactive form creation with basic validation
    this.form = this.fb.group(
      {
        account:    [
          this.accountFieldAttr.value,
          Validators.required
        ],

        firstname:  [
          '',
          Validators.required
        ],

        lastname:   [
          '',
          Validators.required
        ],

        username:   [
          '',
          Validators.required
        ],

        password:   [
          '',
          Validators.required
        ],

        confirmPassword:  [
          '',
          Validators.required
        ]
      },
      {
        // TODO: replace with validation service method
        validator: this._matchingFields('password', 'confirmPassword')
      }
    );
  }

  public onSubmit(user: User): void {
    if (this.form.valid) {
      // form valid, send register new user
      this.authService.register(this.form.value);
    } else {
      // notify user that form data is invalid
      this.errorDisplayService.display('Some entries are invalid');
    }
  }

  /**
   *
   * @param field
   * this method checks if certain field is invalid, but for this field to be deemed invalid,
   * it has to have been "touched"
   */
  public isInvalid(field: string): boolean {
    return this.form.controls[field].invalid && this.form.controls[field].touched;
  }

  /**
   *  this method initializes form values
   */
  private _initializeForm(): void {
    this.accountFieldAttr = new Attributes();
    this.accountFieldAttr.type = 'text';
    this.accountFieldAttr.name = 'account';
    this.accountFieldAttr.placeholder = 'account';
    this.accountFieldAttr.disabled = true;
    this.accountFieldAttr.required = true;

    this.accountFieldAttr.value = ( localStorage.getItem('account') !== null) ?
                                    localStorage.getItem('account') : 'QB1486';

    let errorDuration = ( localStorage.getItem('errorDuration') !== null) ?
                            localStorage.getItem('errorDuration') : '2000';

    this.errorDuration = parseInt(errorDuration, 10);

    this.firstNameFieldAttr = new Attributes();
    this.firstNameFieldAttr.type = 'text';
    this.firstNameFieldAttr.name = 'firstname';
    this.firstNameFieldAttr.placeholder = 'first name';
    this.firstNameFieldAttr.required = true;

    this.lastNameFieldAttr = new Attributes();
    this.lastNameFieldAttr.type = 'text';
    this.lastNameFieldAttr.name = 'lastname';
    this.lastNameFieldAttr.placeholder = 'last name';
    this.lastNameFieldAttr.required = true;

    this.userNameFieldAttr = new Attributes();
    this.userNameFieldAttr.type = 'text';
    this.userNameFieldAttr.name = 'username';
    this.userNameFieldAttr.placeholder = 'username';
    this.userNameFieldAttr.required = true;

    this.passwordFieldAttr = new Attributes();
    this.passwordFieldAttr.type = 'password';
    this.passwordFieldAttr.name = 'password';
    this.passwordFieldAttr.placeholder = 'password';
    this.passwordFieldAttr.required = true;

    this.confirmPasswordFieldAttr = new Attributes();
    this.confirmPasswordFieldAttr.type = 'password';
    this.confirmPasswordFieldAttr.name = 'confirmPassword';
    this.confirmPasswordFieldAttr.placeholder = 'confirm password';
    this.confirmPasswordFieldAttr.required = true;
  }

  /**
   *
   * @param field1
   * @param field2
   * this method checks if two fields contain the same value,
   * returns an error if the field don't match
   */
  private _matchingFields(field1: string, field2: string): any {
    return (form) => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return { mismatchedFields: true };
      }

      return null;
    };
  }

}
