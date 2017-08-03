import { Component, OnInit } from '@angular/core';

// Services
import { WebService } from "../../shared/services/web.service";

// Models
import { Message } from "../../shared/custom-types/interfaces/message";

@Component({
  moduleId: module.id,
  selector: 'ss2-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss']
})
export class MessagesComponent implements OnInit {

  private title: string = 'Messages';

  private messages: Message[];

  constructor(private webService: WebService) { }

  ngOnInit() {
     this.webService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

}
