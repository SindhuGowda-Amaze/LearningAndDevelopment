import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-trainer-course-mapping',
  templateUrl: './trainer-course-mapping.component.html',
  styleUrls: ['./trainer-course-mapping.component.css']
})
export class TrainerCourseMappingComponent implements OnInit {

  constructor(public LearningService:LearningService) { }

  ngOnInit(): void {
  }
  Trainerdetails:any;

  public GetTrainerCourseMapping() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(
      data => {
        debugger
        this.Trainerdetails = data;
      })
  }


}
