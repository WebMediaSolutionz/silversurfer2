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

  private title: string = 'Profile Info';

  private editMode: boolean = false;

  private user: User;

  private isLoading: boolean = false;

  constructor(private webService: WebService,
              private errorDisplayService: ErrorDisplayService) {
    this.isLoading = true;
  }

  public ngOnInit(): void {
    // retreive current user information
    this.webService.getUser().subscribe((res: User) => {
      this.user = res;

      this.isLoading = false;
    });
  }

  public post(): void {
    if (this.user.firstname.trim().length > 0 && this.user.lastname.trim().length > 0) {
      // save current user information
      this.webService.saveUser(this.user).subscribe(() => {
        this.editMode = false;
        this.title = 'Profile Info';
      });
    } else {
      // form values have been left empty, informs user that form is invalid
      this.errorDisplayService.display('Some entries are invalid');
    }
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;

    this.title = (this.editMode) ? 'Edit Profile Info' : 'Profile Info';
  }

}
