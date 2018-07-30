import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dashBboard: DashboardComponent) {
    this.dashBboard.nameToolBar = 'Perfil';
  }

  ngOnInit() {
  }

}
