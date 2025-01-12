import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((mod) => mod.ProfileComponent),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./work/work.component').then((mod) => mod.WorkComponent),
  },
  {
    path: 'attendance',
    loadComponent: () =>
      import('./attendance/attendance.component').then(
        (mod) => mod.AttendanceComponent
      ),
  },
  {
    path: 'leaves',
    loadChildren: () =>
      import('./leaves/leaves.module').then((m) => m.LeavesModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./page404/page404.component').then((mod) => mod.Page404Component),
  },
];
