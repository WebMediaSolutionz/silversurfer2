import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { WebService } from '../../shared/services/web.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private webService: WebService,
              private route: ActivatedRoute) {}

  public ngOnInit(): void {
    let name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
    this.webService.getUser().subscribe();
  }

}
