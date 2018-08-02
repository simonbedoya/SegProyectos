import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';
import { environment } from '../../../../environments/environment';
import { ProjectService } from '../../services/project.service';
import { Location } from '../../../../../node_modules/@angular/common';
import { MatTable } from '../../../../../node_modules/@angular/material';

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
  @ViewChild('tableProject') table: MatTable<ProjectElement>;

  dataSource = this.data;
  columns = ['code', 'name', 'typeProject', 'dateInit', 'dateEnd', 'options'];

  constructor(private router: Router, private route: ActivatedRoute, private dashboard: DashboardComponent,
    private projectservice: ProjectService, private location: Location) {
    this.dashboard.nameToolBar = 'Proyectos';
  }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  goToDelete(project: ProjectElement) {
    console.log(project.name);
    const index = -1;
    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i]['code'] === project.code) {
        this.dataSource.splice(i, 1);
        break;
      }
    }
    this.table.renderRows();
    console.log(index);
  }

  goToDetail(project: ProjectElement) {
    this.projectservice.data = project;
    this.router.navigate([project.code], { relativeTo: this.route });
  }

  goToAddActivity() {
    this.router.navigate(['addActivity'], { relativeTo: this.route });
  }
}

export class ProjectElement {
  code: string;
  name: string;
  description: string;
  observation: string;
  employes: number;
  typeProject: string;
  dateInit: Date;
  dateEnd: Date;
  options: string;
  activities: Activity[];
}

export class Activity {
  name: string;
  description: string;
  observation: string;
  dateRegister: Date;
  state: boolean;
  time: number;
  nameProject: string;
}
