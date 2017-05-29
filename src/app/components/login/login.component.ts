import { Component } from '@angular/core';

// Services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  private loginData: any = {email: '', password: ''};

  constructor(private authService: AuthService) {}

  public login(): void {
    this.authService.login(this.loginData);
  }

}
