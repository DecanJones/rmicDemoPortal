import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TasklistComponent as TasklistComponent } from './components/ticketlist/tasklist.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'material',
                loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            },
            {
                path: 'taskdetails/:id',
                loadChildren: () => import('./components/task-details/task-details.module').then(m => m.StarterModule)
            },
            {
                path: 'tasklist',
                component: TasklistComponent,
                data: {
                    title: 'Task List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Task List' }
                    ]
                }
            },
  

        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
