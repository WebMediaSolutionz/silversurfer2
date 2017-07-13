import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { WebService } from '../../shared/services/web.service';
import { ErrorDisplayService } from '../../shared/services/error-display.service';

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

  constructor(private webService: WebService,
              private errorDisplayService: ErrorDisplayService) {}

  public ngOnInit(): void {
    this.webService.getUser().subscribe((res: User) => {
      this.user = res;
    });
  }

  public post(): void {
    if (this.user.firstname.trim().length > 0 && this.user.lastname.trim().length > 0) {
      this.webService.saveUser(this.user).subscribe();
    } else {
      this.errorDisplayService.display('Some entries are invalid');
    }
  }

}
