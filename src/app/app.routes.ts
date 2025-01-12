import { Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'attendance', component: AttendanceComponent },
  {
    path: 'leaves',
    loadChildren: () =>
      import('./leaves/leaves.module').then((m) => m.LeavesModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];
