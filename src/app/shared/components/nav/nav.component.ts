import { Component, Input } from '@angular/core';

// Services
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent {

  @Input() private title: string;

  constructor(private authService: AuthService) {}

}
