import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {

  private activeLink: string;

  constructor(private http: Http,
              private location: Location,
              private router: Router) {
    this.router.events.subscribe((val) => {
      this.activeLink = this.location.path().substr(1);
    });
  }

  public getConfig(): Observable<string> {
    return this.http.get('./assets/data/config.json')
                    .map((res) => res.json());
  }

}
