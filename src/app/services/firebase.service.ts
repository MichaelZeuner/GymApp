import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth) { }

  signup(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
