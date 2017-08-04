import { Component, OnInit } from '@angular/core';

// Services
import { ConfigService } from './shared/services/config.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  private configs: any;     // app configuration values

  private loaded: boolean = false;

  constructor(private configService: ConfigService) {}

  public ngOnInit(): void {
    this.configService.getConfig()
                      .subscribe(
                        (data) => {
                          this.configs = data;

                          // caching configuration values in localStorage
                          localStorage.setItem('product', this.configs.product);
                          localStorage.setItem('account', this.configs.account);
                          localStorage.setItem('errorDuration', this.configs.errorDuration);
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
