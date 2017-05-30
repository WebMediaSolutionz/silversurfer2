import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent {
  private form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: matchingFields('password', 'confirmPassword')});
  }

  public onSubmit(user): void {
    this.authService.register(this.form.value);
  }

  public isValid(control): boolean {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}

function matchingFields(field1, field2) {
  return (form) => {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return { mismatchedFields: true};
    }
  };
}

function emailValid() {
  return (control) => {
    // tslint:disable-next-line
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(control.value) ? null : {invalidEmail: true};
  };
}
