import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../../services/firebase.service';
import { ConstantsService } from 'src/app/services/constants.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  protected pages; 
  protected selectedPath;

  constructor(private router: Router, private afAuth: AngularFireAuth, 
    private firebaseService: FirebaseService, private constants: ConstantsService) {

    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url) {
        this.selectedPath = event.url;
      }
    })
  }

  async ionViewWillEnter() {
    console.log("THIS ALWAYS CALLEWD");
    let user = await this.firebaseService.getCurrentUser();
    if(user.accessLevel == this.constants.ADMIN) {
      this.pages = this.constants.ADMIN_PAGES;
    }
    else if (user.accessLevel == this.constants.COACH) {
      this.pages = this.constants.COACH_PAGES;
    }
    console.log(this.pages);
  }

  ngOnInit() { }

  logout() {
    this.firebaseService.signOut();
    this.afAuth.auth.signOut();
  }

}
