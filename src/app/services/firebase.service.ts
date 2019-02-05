import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

export interface User {
  email: string;
  accessLevel: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private currentUser: User;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  signup(email, password, accessLevel) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.currentUser = {
          email: email,
          accessLevel: accessLevel
        };

        return this.afs.doc(`users/${data.user.uid}`).set(
          {
            email: email,
            accessLevel: accessLevel
          }
        )
      });
  }

  signOut() {
    this.currentUser = null;
  }

  async getCurrentUser() {
    if(this.currentUser) {
      console.log('Returning sync');
      return this.currentUser;
    }
    else {
      console.log('Returing async');
      await this.storeUserForSynchronous();
      console.log('Async received');
      return this.currentUser;
    }
  }

  async storeUserForSynchronous() {
    const user = await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).get().toPromise();
    console.log(user.data());
    this.currentUser = {
      email: user.data().email,
      accessLevel: user.data().accessLevel
    }
  }

  /* userInformation should be a json object eg.
  {
    name: 'Michael Zeuner'
  }
  */
  updateUser(userInformation: JSON) {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
      .update(userInformation);
  }
}
