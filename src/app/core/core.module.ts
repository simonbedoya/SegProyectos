import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LoginComponent, NotFoundComponent, DashboardComponent, ProfileComponent, SettingsComponent]
})
export class CoreModule { }
