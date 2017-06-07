import { Component, OnInit } from '@angular/core';

// Services
import { WebService } from '../../../../shared/services/web.service';

@Component({
  selector: 'ss2-practices-and-roles',
  templateUrl: './practices-and-roles.component.html',
  styleUrls: ['./practices-and-roles.component.scss']
})
export class PracticesAndRolesComponent implements OnInit {

  private title: string = 'practices and roles';

  private practices: any[];

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getPractices().subscribe((res: any) => {
      this.practices = res;
    });
  }

}
