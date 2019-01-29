import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  groups: Array<any>;
  selectedGroup: any;

  constructor() { }

  ngOnInit() {
    this.selectedGroup = {};//{traingingTimes: [{day: 'test'}]};
    this.groups = [
      {
        name: 'National',
        traingingTimes: [
          {
            day: 'Sun',
            startTime: '4:30',
            endTime: '7:00'
          },
          {
            day: 'Mon',
            startTime: '6:00',
            endTime: '8:30'
          },
          {
            day: 'Tue',
            startTime: '6:00',
            endTime: '8:30'
          },
          {
            day: 'Thu',
            startTime: '6:00',
            endTime: '8:30'
          }
        ]
      },
      {
        name: 'Provincial A',
        traingingTimes: [
          {
            day: 'Sun',
            startTime: '2:00',
            endTime: '4:30'
          },
          {
            day: 'Mon',
            startTime: '4:30',
            endTime: '7:00'
          },
          {
            day: 'Tue',
            startTime: '4:30',
            endTime: '7:00'
          },
          {
            day: 'Thu',
            startTime: '4:30',
            endTime: '7:00'
          }
        ]
      }
    ];
  }

}
