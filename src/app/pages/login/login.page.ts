import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private afAuth: AngularFireAuth, 
    private loadingCtrl: LoadingController, private alertCtrl: AlertController,
    private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['michaelzeuner1996@gmail.com', Validators.compose([Validators.email, Validators.required])],
      password: ['Laurier96', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  async signupUser() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    loading.present();

    this.firebaseService.signup(this.loginForm.value.email, this.loginForm.value.password)
    .then(_ => {
      loading.dismiss();
      this.showBasicAlert('Success', 'You may now login!');
    }, err => {
      loading.dismiss().then(() => {
        this.showBasicAlert('Error', err.message);
      })
    });
  }

  async loginUser() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    loading.present();

    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(data => {
        console.log('User Login Data: ', data);
        loading.dismiss();
      }, err => {
        loading.dismiss().then(() => {
          this.showBasicAlert('Error', err.message);
        })
      });
  }

  async showBasicAlert(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  forgotPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.loginForm.value.email).then(_ => {
      this.showBasicAlert('Success', 'Please check your emails now!');
    }).catch(err => {
      this.showBasicAlert('Error', err.message);
    });
  }
}
