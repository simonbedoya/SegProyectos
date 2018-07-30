import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListProjectComponent, ProjectComponent, DetailProjectComponent, AddProjectComponent]
})
export class ProjectModule { }
