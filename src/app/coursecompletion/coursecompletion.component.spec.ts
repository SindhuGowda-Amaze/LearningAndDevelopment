import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecompletionComponent } from './coursecompletion.component';

describe('CoursecompletionComponent', () => {
  let component: CoursecompletionComponent;
  let fixture: ComponentFixture<CoursecompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecompletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
