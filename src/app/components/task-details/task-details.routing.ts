import { Routes } from '@angular/router';

import { TaskDetailsComponent } from './task-details.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: TaskDetailsComponent,
	data: {
      title: 'Task details',
      urls: [
        { title: 'Task details', url: '/dashboard' },
        { title: 'Task details' }
      ]
    }
  }
];
