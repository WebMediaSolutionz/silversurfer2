import { Component, OnInit } from '@angular/core';

// Services
import { SharedVarsService } from './shared/services/shared-vars.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

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
            localStorage.setItem('account', this.sharedVars.account);
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
