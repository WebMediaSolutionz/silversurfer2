import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

// Services
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() private title: string;

  private activePage: string;

  constructor(private authService: AuthService,
              private router: ActivatedRoute) {}

  public ngOnInit(): void {
    let parts: string;

    this.router.url.forEach((segments: UrlSegment[]) => {
        parts = segments.join('/');

        console.info(segments);
    });

    console.info(parts);
  }

}
