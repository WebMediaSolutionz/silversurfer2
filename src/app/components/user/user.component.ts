import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { WebService } from '../../shared/services/web.service';

// Classes
import { User } from '../../shared/custom-types/classes/user';

@Component({
  moduleId: module.id,
  selector: 'ss2-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  private formTitle: string = 'edit info';

  private user: User = new User();

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getUser().subscribe((res: User) => {
      this.user.account = res.account;
      this.user.firstname = res.firstname;
      this.user.lastname = res.lastname;
    });
  }

  public post(): void {
    this.webService.saveUser(this.user).subscribe();
  }

}
