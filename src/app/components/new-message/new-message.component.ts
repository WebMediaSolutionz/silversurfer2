import { Component } from '@angular/core';

// Services
import { WebService } from "../../shared/services/web.service";

// Models
import { Message } from "../../shared/custom-types/interfaces/message";

@Component({
  moduleId: module.id,
  selector: 'ss2-new-message',
  templateUrl: 'new-message.component.html',
  styleUrls: ['new-message.component.scss']
})
export class NewMessageComponent {

  private msg: Message = {
    owner: 'owner',
    text: 'text'
  };

  constructor(private webService: WebService) {}

  public post() {
    this.webService.postMessage(this.msg);
  }
}
