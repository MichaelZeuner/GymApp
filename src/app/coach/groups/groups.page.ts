import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  groups: Array<any>;
  selectedGroup: any;

  constructor(private toastCtrl: ToastController) { }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.selectedGroup = {};//{traingingTimes: [{day: 'test'}]};
    this.groups = [
      {
        name: 'National',
        traingingTimes: [
          {
            day: 'Sun',
            startTime: '4:30',
            endTime: '7:00'
          },
          {
            day: 'Mon',
            startTime: '6:00',
            endTime: '8:30'
          },
          {
            day: 'Tue',
            startTime: '6:00',
            endTime: '8:30'
          },
          {
            day: 'Thu',
            startTime: '6:00',
            endTime: '8:30'
          },
          {
            day: 'Fri',
            startTime: '6:00',
            endTime: '8:30'
          }
        ],
        athletes: [
          {
            name: 'Michael Zeuner'
          },
          {
            name: 'Jordyn Miller-Burko'
          }
        ]
      },
      {
        name: 'Provincial A',
        traingingTimes: [
          {
            day: 'Sun',
            startTime: '2:00',
            endTime: '4:30'
          },
          {
            day: 'Mon',
            startTime: '4:30',
            endTime: '7:00'
          },
          {
            day: 'Tue',
            startTime: '4:30',
            endTime: '7:00'
          },
          {
            day: 'Thu',
            startTime: '4:30',
            endTime: '7:00'
          }
        ],
        athletes: [
          {
            name: 'Bella'
          },
          {
            name: 'Libby'
          }
        ]
      }
    ];
  }

}
