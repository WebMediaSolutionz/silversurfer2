import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// Services
import { WebService } from './web.service';

// Classes
import { User } from '../custom-types/classes/user';

@Injectable()
export class ConfigService {

  private activeLink: string;

  constructor(private webService: WebService,
              private location: Location,
              private router: Router) {
    // keeping track of the active route so that right tab
    // can be hightlighted in the navigation bar
    this.router.events.subscribe((val) => {
      this.activeLink = this.location.path().substr(1);
    });
  }

  public getConfig(): Observable<any> {
    return this.webService.getConfig();
  }

}
