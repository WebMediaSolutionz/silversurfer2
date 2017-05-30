import { Component } from '@angular/core';

// Services
import { WebService } from '../../shared/services/web.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-new-post',
  templateUrl: 'new-post.component.html',
  styleUrls: ['new-post.component.scss']
})
export class NewPostComponent {

  private message: any = {owner: this.authService.name, text: ''};

  constructor(private webService: WebService,
              private authService: AuthService) {}

  public post(): void {
    this.webService.postMessage(this.message);
  }

}
