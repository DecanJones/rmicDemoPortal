import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
	data: {
      title: 'Task details',
      urls: [
        { title: 'Task details', url: '/dashboard' },
        { title: 'Task details' }
      ]
    }
  }
];
