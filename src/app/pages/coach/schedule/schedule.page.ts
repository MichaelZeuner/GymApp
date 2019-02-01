import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  upcomingCoachingDays: Array<any>;

  constructor(private toastCtrl: ToastController) { }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.upcomingCoachingDays = [
      {
        date: 'Thursday, January 24',
        groups: [
          {
            name: 'National',
            startTime: '6:00',
            endTime: '8:30',
            modifiedStartTime: null,
            modifiedEndTime: null,
            canceled: false,
            coach: null
          },
          {
            name: 'Provincial A',
            startTime: '4:30',
            endTime: '7:00',
            modifiedStartTime: '4:00',
            modifiedEndTime: '6:30',
            canceled: false,
            coach: null
          }
        ]
      },
      {
        date: 'Sunday, January 27',
        groups: [
          {
            name: 'National',
            startTime: '4:30',
            endTime: '7:00',
            modifiedStartTime: '4:00',
            modifiedEndTime: '6:30',
            canceled: false,
            coach: 'Ryan'
          },
          {
            name: 'Provincial A',
            startTime: '4:30',
            endTime: '7:00',
            modifiedStartTime: null,
            modifiedEndTime: null,
            canceled: true
          }
        ]
      }
    ];
  }

}
