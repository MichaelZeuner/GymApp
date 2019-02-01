import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAttendanceBasePage } from './coach-attendance-base.page';

describe('CoachAttendanceBasePage', () => {
  let component: CoachAttendanceBasePage;
  let fixture: ComponentFixture<CoachAttendanceBasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachAttendanceBasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachAttendanceBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
