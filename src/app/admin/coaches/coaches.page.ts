import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.page.html',
  styleUrls: ['./coaches.page.scss'],
})
export class CoachesPage implements OnInit {

  coaches: Array<any>;

  constructor() { }

  ngOnInit() {
    this.coaches = [
      {
        name: 'Denis Vachon',
      }
    ];
  }

}
