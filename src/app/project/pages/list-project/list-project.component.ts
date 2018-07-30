import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ListProjectComponent {
  private data = environment.ELEMENT_DATA;

  dataSource = this.data;
  columns = ['code', 'name', 'dateInit', 'dateEnd', 'options'];

  constructor(private router: Router, private route: ActivatedRoute, private dashboard: DashboardComponent) {
    this.dashboard.nameToolBar = 'Proyectos';
  }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  goToDetail(project: ProjectElement) {
    this.router.navigate([project.code], { relativeTo: this.route });
  }
}

export class ProjectElement {
  code: string;
  name: string;
  dateInit: Date;
  dateEnd: Date;
  options: string;
}
