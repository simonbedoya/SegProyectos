import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Activity } from '../../../project/pages/list-project/list-project.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  dataProjects = environment.ELEMENT_DATA;
  codeSelectProject: string;
  activity: Activity = new Activity();

  constructor(private dashBoard: DashboardComponent, private router: Router, private route: ActivatedRoute) {
    this.dashBoard.nameToolBar = 'Agregar Actividad';
  }

  ngOnInit() {
  }

  saveActivity() {
    for (const project of this.dataProjects) {
      if (project.code === this.codeSelectProject) {
        project.activities.push(this.activity);
      }
    }
    this.backListActivities();
  }

  backListActivities() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
