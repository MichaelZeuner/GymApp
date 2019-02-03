import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  signup(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        return this.afs.doc(`users/${data.user.uid}`).set(
          {
            email: email,
            name: email
          }
        )
      });
  }

  getUserInformation() {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
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
