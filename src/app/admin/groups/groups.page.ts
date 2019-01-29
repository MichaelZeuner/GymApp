import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  groups: Array<any>;

  constructor() { }

  ngOnInit() {
    this.groups = [
      {
        name: 'National',
        coachName: 'Denis Vachon'
      }
    ];
  }

}
