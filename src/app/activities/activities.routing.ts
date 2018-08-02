import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ListActivitiesComponent } from './pages/list-activities/list-activities.component';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';

export const activitiesRoutes: Routes = [
    { path: 'activities', component: ActivitiesComponent, children:
    [
        {path: '', component: ListActivitiesComponent },
        {path: 'add', component: AddActivityComponent }
    ]}
];
