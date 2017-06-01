import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

// Services
import { AuthService } from '../../shared/services/auth.service';

// Classes
import { User } from '../../shared/custom-types/classes/user';

@Component({
  moduleId: module.id,
  selector: 'ss2-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent {

  private formTitle: string = 'sign up';
  
  private form: FormGroup;

  private account: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private sb: MdSnackBar) {
    this.account = (localStorage.getItem('account') !== 'undefined') ?
                    localStorage.getItem('account') : '';

    this.form = this.fb.group(
      {
        account:    [ this.account, Validators.required ],
        firstname:  [ '', Validators.required ],
        lastname:   [ '', Validators.required ],
        username:   [ '', Validators.required ],
        password:   [ '', Validators.required ],
        confirmPassword:  [ '', Validators.required ]
      },
      {
        validator: this._matchingFields('password', 'confirmPassword')    // TODO: replace with validation service method
      }
    );
  }

  public onSubmit(user: User): void {
    if (this.form.valid) {
      this.authService.register(this.form.value);
    } else {
      this.sb.open('some entries are invalid', 'close', {duration: 2000});
    }
  }

  public isValid(field: string): boolean {
    return this.form.controls[field].invalid && this.form.controls[field].touched;
  }

  private _matchingFields(field1: string, field2: string): any {
    return (form) => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return { mismatchedFields: true};
      }
    };
  }

}
