import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-record',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  @Input('athlete') athlete: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async setRecord(athlete) {
    let toast = await this.toastCtrl.create({
      message: 'Clicked',
      duration: 2000
    });
    toast.present();
  }
}
