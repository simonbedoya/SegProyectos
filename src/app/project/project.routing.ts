import { Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';

export const projectRoutes: Routes = [
    {
        path: 'project', component: ProjectComponent, children:
            [
                { path: '', component: ListProjectComponent },
                { path: 'add', component: AddProjectComponent },
                { path: 'addActivity', redirectTo: '/dashboard/activities/add', pathMatch: 'full'},
                { path: ':id', component: DetailProjectComponent },
                { path: ':id/addActivity', redirectTo: '/dashboard/activities/add', pathMatch: 'full'}
            ]
    }
];
