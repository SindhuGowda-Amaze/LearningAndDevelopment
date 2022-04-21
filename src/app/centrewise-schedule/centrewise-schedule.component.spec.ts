import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrewiseScheduleComponent } from './centrewise-schedule.component';

describe('CentrewiseScheduleComponent', () => {
  let component: CentrewiseScheduleComponent;
  let fixture: ComponentFixture<CentrewiseScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrewiseScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrewiseScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
