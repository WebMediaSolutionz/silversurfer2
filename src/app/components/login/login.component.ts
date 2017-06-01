import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../../shared/services/auth.service';

// Classes
import { Credentials } from '../../shared/custom-types/classes/credentials';

@Component({
  moduleId: module.id,
  selector: 'ss2-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private formTitle: string = 'login';

  private credentials = new Credentials();

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.credentials.account = (localStorage.getItem('account') !== 'undefined') ?
                                localStorage.getItem('account') : '';
  }

  public login(): void {
    this.authService.login(this.credentials);
  }

}
