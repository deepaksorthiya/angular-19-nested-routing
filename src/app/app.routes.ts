import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((mod) => mod.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./work/work.component').then((mod) => mod.WorkComponent),
    canActivate: [authGuard],
  },
  {
    path: 'attendance',
    loadComponent: () =>
      import('./attendance/attendance.component').then(
        (mod) => mod.AttendanceComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'leaves',
    loadChildren: () =>
      import('./leaves/leaves.module').then((m) => m.LeavesModule),
    canActivateChild: [authGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page404/page404.component').then((mod) => mod.Page404Component),
  },
];
