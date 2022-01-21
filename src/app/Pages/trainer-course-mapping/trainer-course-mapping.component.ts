import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-trainer-course-mapping',
  templateUrl: './trainer-course-mapping.component.html',
  styleUrls: ['./trainer-course-mapping.component.css']
})
export class TrainerCourseMappingComponent implements OnInit {
search:any;
  constructor(public LearningService:LearningService) { }

  ngOnInit(): void {
    this.GetTrainerCourseMappingDashboard();
  }
  Trainerdetails:any;

  public GetTrainerCourseMappingDashboard() {
    debugger
    this.LearningService.GetTrainerCourseMappingDashboard().subscribe(
      data => {
        debugger
        this.Trainerdetails = data;
      })
  }


}
