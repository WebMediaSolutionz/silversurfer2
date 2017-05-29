import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class SharedVarsService {

  constructor(private http: Http) {}

  public getVars(): Observable<string> {
    return this.http.get( './assets/data/shared_vars.json' )
                    .map((res) => res.json());
  }

}
