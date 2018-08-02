import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from '../activities/activities.component';
import { ListActivitiesComponent, ListActivitiDialogComponent } from '../activities/pages/list-activities/list-activities.component';
import { SharedModule } from '../shared/shared.module';
import { AddActivityComponent } from '../activities/pages/add-activity/add-activity.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    ListActivitiDialogComponent
  ],
  declarations: [ListActivitiesComponent, ActivitiesComponent, ListActivitiDialogComponent, AddActivityComponent]
})
export class ActivitiesModule { }
