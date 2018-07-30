import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../../core/pages/dashboard/dashboard.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  name = '';

  constructor(private dashboard: DashboardComponent) {
    this.dashboard.nameToolBar = 'Agregar Proyecto';
  }

  ngOnInit() {
  }
}
