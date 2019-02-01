import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendanceRecord/attendance.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AttendanceComponent]
})
export class SharedComponentsModule { }
