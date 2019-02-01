import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  @Input('record') record: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async setRecord(record) {
    let toast = await this.toastCtrl.create({
      message: 'Clicked'
    });
    toast.present();
  }
}
