import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';
import { ProjectElement, Activity } from '../list-project/list-project.component';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  private dataEnv = environment.ELEMENT_DATA;
  project: ProjectElement = new ProjectElement();
  minDate: Date = new Date();

  constructor(private dashboard: DashboardComponent, private router: Router, private route: ActivatedRoute) {
    this.dashboard.nameToolBar = 'Agregar Proyecto';
  }

  ngOnInit() {
  }

  saveProject() {
    this.project.activities = [];
    this.dataEnv.push(this.project);
    this.backListProyects();
  }

  backListProyects() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}

