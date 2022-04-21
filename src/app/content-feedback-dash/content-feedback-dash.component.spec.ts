import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeedbackDashComponent } from './content-feedback-dash.component';

describe('ContentFeedbackDashComponent', () => {
  let component: ContentFeedbackDashComponent;
  let fixture: ComponentFixture<ContentFeedbackDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFeedbackDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFeedbackDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
