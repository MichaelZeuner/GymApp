import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoachAttendanceBasePage } from './coach-attendance-base.page';

const routes: Routes = [
  {
    path: 'attendance',
    component: CoachAttendanceBasePage,
    children: [
      {
        path: 'add-records',
        loadChildren: '../add-records/attendance.module#AttendancePageModule'
      },
      {
        path: 'view-records',
        loadChildren: '../view-records/view-records.module#ViewRecordsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'attendance/add-records',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachAttendanceBasePage]
})
export class CoachAttendanceBasePageModule {}
