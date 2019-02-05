import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu/menu.page';
import { GroupsPage } from './coach/groups/groups.page';
import { SchedulePage } from './coach/schedule/schedule.page';
import { AttendancePage } from './coach/attendance/add-records/attendance.page';
import { ClubPage } from './admin/club/club.page';
import { CoachesPage } from './admin/coaches/coaches.page';
import { AdminGroupsPage } from './admin/groups/groups.page';
import { AthletesPage } from './admin/athletes/athletes.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'admin-club',
        component: ClubPage
      },
      {
        path: 'admin-coaches',
        component: CoachesPage
      },
      {
        path: 'admin-groups',
        component: AdminGroupsPage
      },
      {
        path: 'admin-athletes',
        component: AthletesPage
      },
      {
        path: 'coach-groups',
        component: GroupsPage
      },
      {
        path: 'coach-schedule',
        component: SchedulePage
      },
      {
        path: 'coach-attendance',
        component: AttendancePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
