import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattedanceComponent } from './studentattedance.component';

describe('StudentattedanceComponent', () => {
  let component: StudentattedanceComponent;
  let fixture: ComponentFixture<StudentattedanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentattedanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattedanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
