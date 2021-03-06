import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { AuthService } from '../../shared/services/auth.service';
import { ErrorDisplayService } from '../../shared/services/error-display.service';

// Classes
import { Credentials } from '../../shared/custom-types/classes/credentials';

@Component({
  moduleId: module.id,
  selector: 'ss2-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private title: string = 'login';

  private credentials = new Credentials();

  private loginForm: FormGroup;

  private formSubmitted: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder,
              private errorDisplayService: ErrorDisplayService) {}

  public ngOnInit(): void {
    this.credentials.account = (localStorage.getItem('account') !== null) ?
                                localStorage.getItem('account') : 'QB1486';

    // if user is logged in, he's redirected to the "dashboard"
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    }

    // reactive form creation with basic validation
    this.loginForm = this.fb.group({
      account: [this.credentials.account, Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formSubmitted = false;
  }

  public resetForm(): void {
    this.formSubmitted = false;
  }

  public login(creds: Credentials): void {
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      // form values are valid, process authentication.
      this.authService.login(this.loginForm.value);
    } else {
      // inform user that form could not be processed.
      this.errorDisplayService.display(
        'Your authentication failed. Please verify ' +
        'that your account, user id and password are correct.'
      );
    }
  }

}
