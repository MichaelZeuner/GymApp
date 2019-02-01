import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.page.html',
  styleUrls: ['./athletes.page.scss'],
})
export class AthletesPage implements OnInit {

  athletes: Array<any>;

  constructor() { }

  ngOnInit() {
    this.athletes = [
      {
        name: 'Michael Zeuner',
      }
    ];
  }

}
