import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MenuPageModule } from './menu/menu.module';
import { SchedulePageModule } from './coach/schedule/schedule.module';
import { GroupsPageModule } from './coach/groups/groups.module';
import { AttendancePageModule } from './coach/attendance/add-records/attendance.module';
import { ClubPageModule } from './admin/club/club.module';
import { CoachesPageModule } from './admin/coaches/coaches.module';
import { AdminGroupsPageModule } from './admin/groups/groups.module';
import { AthletesPageModule } from './admin/athletes/athletes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MenuPageModule,
    ClubPageModule,
    CoachesPageModule,
    AdminGroupsPageModule,
    AthletesPageModule,
    GroupsPageModule,
    SchedulePageModule,
    AttendancePageModule
  ]
})
export class PagesModule { }
