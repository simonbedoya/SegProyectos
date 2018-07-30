import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from '../activities/activities.component';
import { ListActivitiesComponent } from '../activities/pages/list-activities/list-activities.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListActivitiesComponent, ActivitiesComponent]
})
export class ActivitiesModule { }
