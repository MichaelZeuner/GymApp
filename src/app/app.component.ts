import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Club',
      url: '/admin/club',
      icon: 'clipboard',
      accessLevel: 'ADMIN'
    },
    {
      title: 'Coaches',
      url: '/admin/coaches',
      icon: 'stopwatch',
      accessLevel: 'ADMIN'
    },
    {
      title: 'Groups',
      url: '/admin/groups',
      icon: 'people',
      accessLevel: 'ADMIN'
    },
    {
      title: 'Athletes',
      url: '/admin/athletes',
      icon: 'fitness',
      accessLevel: 'ADMIN'
    },
    {
      title: 'Groups',
      url: '/coach/groups',
      icon: 'people',
      accessLevel: 'COACH'
    },
    {
      title: 'Schedule',
      url: '/coach/schedule',
      icon: 'calendar',
      accessLevel: 'COACH'
    },
    {
      title: 'Attendance',
      url: '/coach/attendance',
      icon: 'calendar',
      accessLevel: 'COACH'
    }
  ];

  public user = {
    accessLevel: 'COACH'
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
