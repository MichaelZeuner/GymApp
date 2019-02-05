import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { ConstantsService } from './services/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private firebaseService: FirebaseService,
    private router: Router,
    private constants: ConstantsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.afAuth.auth.onAuthStateChanged(user => {
        if(user) {
          this.routeToCorrespondingAccesslevelPage();
        } else {
          this.router.navigate(['login']);
        }
      })
    });
  }

  async routeToCorrespondingAccesslevelPage() {
    let user = await this.firebaseService.getCurrentUser();

    if(user.accessLevel == this.constants.ADMIN) {
      this.router.navigateByUrl('/pages/menu/admin-club');
    } 
    else if(user.accessLevel == this.constants.COACH) {
      this.router.navigateByUrl('/pages/menu/coach-attendance');
    }
    else {
      console.error("Access level not matched to an opening page: " + user.accessLevel);
    }
  }
}
