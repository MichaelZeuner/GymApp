import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public readonly ADMIN = "ADMIN";
  public readonly ADMIN_PAGES = [
    {
      title: 'Club',
      url: '/pages/menu/admin-club'
    },
    {
      title: 'Coaches',
      url: '/pages/menu/admin-coaches'
    },
    {
      title: 'Groups',
      url: '/pages/menu/admin-groups'
    },
    {
      title: 'Athletes',
      url: '/pages/menu/admin-athletes'
    }
  ];
  
  public readonly COACH = "COACH";
  public readonly COACH_PAGES = [
    {
      title: 'Groups',
      url: '/pages/menu/coach-groups'
    },
    {
      title: 'Schedule',
      url: '/pages/menu/coach-schedule'
    },
    {
      title: 'Attendance',
      url: '/pages/menu/coach-attendance'
    }
  ];


  constructor() { }
}
