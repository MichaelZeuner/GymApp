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
      this.attendanceRecords = res['days'];
      console.log(this.attendanceRecords);
      this.attendanceRecords[0].open = true;
      console.log(this.attendanceRecords[0].open);
    })
   }

  toggleSection(index) {
    this.attendanceRecords[index].open = !this.attendanceRecords[index].open;
    this.closeOtherSections(index);    
  }

  closeOtherSections(index) {
    if(this.attendanceRecords[index].open) {
      this.attendanceRecords
          .filter((section, sectionIndex) => sectionIndex != index)
          .map(section => section.open = false);
    }
  }

  toggleRecord(index, childIndex) {
    this.attendanceRecords[index].groups[childIndex].open = !this.attendanceRecords[index].groups[childIndex].open;
  }
}
