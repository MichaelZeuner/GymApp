import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})

export class AttendancePage {

  attendanceRecords: Array<any>;
  automaticClose = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/attendanceRecords.json').subscribe(res => {
      this.attendanceRecords = res['items'];
      this.attendanceRecords[0].open = true;
    })
   }

   toggleSection(index) {
    this.attendanceRecords[index].open = !this.attendanceRecords[index].open;

    if(this.automaticClose && this.attendanceRecords[index].open) {
      this.attendanceRecords
          .filter((record, recordIndex) => recordIndex != index)
          .map(record => record.open = false);
    }
   }

   toggleRecord(index, childIndex) {
    this.attendanceRecords[index].children[childIndex].open = !this.attendanceRecords[index].children[childIndex].open;
   }
}
