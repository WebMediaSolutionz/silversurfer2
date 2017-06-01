import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent implements OnInit {

  private activeLink: string;

  constructor(private authService: AuthService,
              private location: Location,
              private router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.activeLink = this.location.path().substr(1);
    });
  }

}
