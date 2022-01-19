import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-assessmentdashboard',
  templateUrl: './assessmentdashboard.component.html',
  styleUrls: ['./assessmentdashboard.component.css']
})
export class AssessmentdashboardComponent implements OnInit {

  constructor(public LearningService:LearningService) { }
  result:any;
  search:any;
  quetionlist:any;
  ngOnInit(): void {
    this.GetAssessments();
  }

  public GetAssessments() {
    debugger
    this.LearningService.GetAssessments().subscribe(
      data => {
        debugger
        this.quetionlist = data;
      })
  }
}
