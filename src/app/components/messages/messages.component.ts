import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { WebService } from '../../shared/services/web.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private webService: WebService,
              private route: ActivatedRoute) {}

  public ngOnInit(): void {
    let name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
    this.webService.getUser().subscribe();
  }

}
