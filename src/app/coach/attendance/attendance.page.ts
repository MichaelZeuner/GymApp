import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})

export class AttendancePage implements OnInit {

  attendanceRecords: Array<any>;

  constructor() { }

  ngOnInit() {
    this.attendanceRecords = [
      {
        date: 'Thursday, January 24',
        expanded: false,
        groups: [
          {
            name: 'National',
            athletes: [
              {
                name: 'Michael Zeuner',
                record: 'LATE'
              }
            ]
          }
        ]
      }
    ];
  }
}
