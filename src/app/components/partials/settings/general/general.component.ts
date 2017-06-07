import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

// Services
import { WebService } from '../../../../shared/services/web.service';

// Classes
import { User } from '../../../../shared/custom-types/classes/user';

@Component({
  moduleId: module.id,
  selector: 'ss2-general',
  templateUrl: 'general.component.html',
  styleUrls: ['general.component.scss']
})
export class GeneralComponent implements OnInit {

  private title: string = 'general';

  private user: User = new User();

  private password: any = {
    current: '',
    new: '',
    confirmNew: ''
  };

  private passwordsMatch: boolean = true;

  constructor(private sb: MdSnackBar,
              private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getUser().subscribe((res: User) => {
      this.user = res;
    });
  }

  public save(): void {
    if (this.password.current !== this.user.password) {
      this.sb.open('Email or Password incorrect', 'close', {duration: 2000});
    } else if (this.password.new !== this.password.confirmNew) {
      this.sb.open('Some entries are invalid', 'close', {duration: 2000});
    } else {
      this.user.password = this.password.new;

      this.webService
          .saveUser(this.user)
          .subscribe(() => {
            this._clearForm();
          });
    }
  }

  public mismatchedFields(): void {
    this.passwordsMatch = (this.password.new === this.password.confirmNew );
  }

  private _clearForm(): void {
    this.password.current = '';
    this.password.new = '';
    this.password.confirmNew = '';
  }

}
