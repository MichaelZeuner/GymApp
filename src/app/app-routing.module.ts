import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'admin/club', loadChildren: './admin/club/club.module#ClubPageModule' },
  { path: 'admin/coaches', loadChildren: './admin/coaches/coaches.module#CoachesPageModule' },
  { path: 'admin/groups', loadChildren: './admin/groups/groups.module#GroupsPageModule' },
  { path: 'admin/athletes', loadChildren: './admin/athletes/athletes.module#AthletesPageModule' },
  { path: 'coach/groups', loadChildren: './coach/groups/groups.module#GroupsPageModule' },
  { path: 'coach/schedule', loadChildren: './coach/schedule/schedule.module#SchedulePageModule' },
  { path: 'coach/attendance', loadChildren: './coach/attendance/attendance.module#AttendancePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
