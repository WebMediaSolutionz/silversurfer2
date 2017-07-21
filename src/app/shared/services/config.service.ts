import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// Services
import { WebService } from './web.service';

// Models
import { User } from '../custom-types/classes/user';

@Injectable()
export class ConfigService {

  private activeLink: string;

  private accessLevel;

  constructor(private webService: WebService,
              private location: Location,
              private router: Router) {
    this.router.events.subscribe((val) => {
      this.activeLink = this.location.path().substr(1);
    });

    this.webService.getUser().subscribe((user: User) => {
      this.accessLevel = user.role;
    });
  }

  public getConfig(): Observable<any> {
    return this.webService.getConfig();
  }

}
