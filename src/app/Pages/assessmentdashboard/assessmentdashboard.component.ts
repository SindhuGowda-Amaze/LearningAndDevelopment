import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-assessmentdashboard',
  templateUrl: './assessmentdashboard.component.html',
  styleUrls: ['./assessmentdashboard.component.css']
})
export class AssessmentdashboardComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
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

  public Ondelete(id:any) {
    this.LearningService.DeleteAssessments(id).subscribe(
      data => {
        debugger
        Swal.fire('Successfully Deleted...!');
        this.GetAssessments();
      }
    )
  }
}
