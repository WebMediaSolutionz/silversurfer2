import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SharedVarsService } from './shared/services/shared-vars.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  private title: string = 'message board';

  private sharedVars: any;

  private loaded: boolean = false;

  constructor(private sharedVarsService: SharedVarsService) {}

  public ngOnInit(): void {
    this.sharedVarsService
        .getVars()
        .subscribe(
          (data) => {
            this.sharedVars = data;
            localStorage.setItem('product', this.sharedVars.product);
          },
          (err) => {
            console.info(err);
          },
          () => {
            this.loaded = true;
          }
        );
  }
}
