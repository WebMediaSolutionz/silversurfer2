import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { WebService } from '../../shared/services/web.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  private model: any = {firstname: '', lastname: ''};

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getUser().subscribe((res) => {
      this.model.firstname = res.firstname;
      this.model.lastname = res.lastname;
    });
  }

  public post(): void {
    this.webService.saveUser(this.model).subscribe();
  }

}
