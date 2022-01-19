import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-trainer-course-mapping-form',
  templateUrl: './trainer-course-mapping-form.component.html',
  styleUrls: ['./trainer-course-mapping-form.component.css']
})
export class TrainerCourseMappingFormComponent implements OnInit {
  id:any;
  constructor(public LearningService:LearningService) { }
  trainerlist:any;
  ngOnInit(): void {
    this.GetTrainer();
  }

  public GetTrainer() {
    debugger
    this.LearningService.GetTrainer().subscribe(
      data => {
        debugger
        this.trainerlist = data;
      })
  }

  cancel() {
    location.href = "/TrainerCourseMapping";
  }
}
