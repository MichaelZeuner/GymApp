import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MenuPageModule } from './menu/menu.module';
import { SchedulePageModule } from './coach/schedule/schedule.module';
import { GroupsPageModule } from './coach/groups/groups.module';
import { AttendancePageModule } from './coach/attendance/add-records/attendance.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MenuPageModule,
    GroupsPageModule,
    SchedulePageModule,
    AttendancePageModule
  ]
})
export class PagesModule { }
