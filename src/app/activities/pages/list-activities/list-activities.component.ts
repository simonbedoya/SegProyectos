import { Component, OnInit, Inject } from '@angular/core';
import { Activity, ProjectElement } from '../../../project/pages/list-project/list-project.component';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '../../../../../node_modules/@angular/material';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {

  private projects = environment.ELEMENT_DATA;
  dataActivities: Activity[] = [];

  constructor(public dialog: MatDialog, private dashBoard: DashboardComponent, private router: Router, private route: ActivatedRoute) {
    this.dashBoard.nameToolBar = 'Actividades';
    this.loadDataActivity();
  }

  loadDataActivity() {
    for (const project of this.projects) {
      for (const activity of project.activities) {
        activity.nameProject = project.name;
        this.dataActivities.push(activity);
      }
    }
  }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  openDialog(activity: Activity) {
    console.log(activity.toString());
    const dialogRef = this.dialog.open(ListActivitiDialogComponent, {
      data: { activity: activity}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-list-activitie-dialog',
  templateUrl: './list-activities-dialog.html',
  styleUrls: []
})
export class ListActivitiDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ListActivitiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
