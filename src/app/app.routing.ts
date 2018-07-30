import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { projectRoutes } from './project/project.routing';
import { activitiesRoutes } from './activities/activities.routing';
import { ProfileComponent } from './core/pages/profile/profile.component';
import { SettingsComponent } from './core/pages/settings/settings.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
        children: [
            ...projectRoutes,
            ...activitiesRoutes,
            { path: 'profile', component: ProfileComponent},
            { path: 'settings', component: SettingsComponent},
            { path: '', redirectTo: 'project', pathMatch: 'full' }
        ] },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }
