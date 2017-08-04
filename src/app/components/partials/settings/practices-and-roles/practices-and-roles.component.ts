import { Component, OnInit } from '@angular/core';

// Services
import { WebService } from '../../../../shared/services/web.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-practices-and-roles',
  templateUrl: 'practices-and-roles.component.html',
  styleUrls: ['practices-and-roles.component.scss']
})
export class PracticesAndRolesComponent implements OnInit {

  private title: string = 'practices and roles';

  private clients: any[];

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    // retrieving clients
    this.webService.getClients().subscribe((res: any) => {
      this.clients = res;
    });
  }

}
