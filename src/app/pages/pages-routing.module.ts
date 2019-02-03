import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu/menu.page';
import { GroupsPage } from './coach/groups/groups.page';
import { SchedulePage } from './coach/schedule/schedule.page';
import { AttendancePage } from './coach/attendance/add-records/attendance.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
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
