import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {

  constructor(private http: Http) {}

  public getConfig(): Observable<string> {
    return this.http.get('./assets/data/config.json')
                    .map((res) => res.json());
  }

}
