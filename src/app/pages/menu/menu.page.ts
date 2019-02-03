import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Groups',
      url: '/pages/menu/coach-groups'
    },
    {
      title: 'Schedule',
      url: '/pages/menu/coach-schedule'
    },
    {
      title: 'Attendance',
      url: '/pages/menu/coach-attendance'
    },
  ]

  selectedPath = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url) {
        this.selectedPath = event.url;
      }
    })
  }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
