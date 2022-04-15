import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetabledshComponent } from './timetabledsh.component';

describe('TimetabledshComponent', () => {
  let component: TimetabledshComponent;
  let fixture: ComponentFixture<TimetabledshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetabledshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetabledshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
