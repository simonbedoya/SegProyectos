import { Component, OnInit } from '@angular/core';
import { Activity, ProjectElement } from '../list-project/list-project.component';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  project: ProjectElement;

  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService,
    private dashBoard: DashboardComponent) {
    this.dashBoard.nameToolBar = 'Detalles Proyecto';
    if (this.projectService.data == null) {
      this.project = new ProjectElement();
    } else {
      this.project = this.projectService.data;
    }
  }

  ngOnInit() {
  }

  goToAddActivity() {
    this.router.navigate(['addActivity'], { relativeTo: this.route });
  }
}
