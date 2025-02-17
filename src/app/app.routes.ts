import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      },
      {
        path: 'index',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./components/pages/auth/auth.module').then((m) => m.AuthModule)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
    ]
  }
];
