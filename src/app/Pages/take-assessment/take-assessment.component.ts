import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-take-assessment',
  templateUrl: './take-assessment.component.html',
  styleUrls: ['./take-assessment.component.css']
})
export class TakeAssessmentComponent implements OnInit {
  loader:any;
  constructor(public LearningService: LearningService, public ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAssessments() ;
    this.loader=true;
  }
  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "you want to submit your answers",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success',
          'Your Answers is successfully Submitted.',
          'success'
        )
       
      }
    })
    this.loader=false;
    location.href="#/AssessmentResult"
  }

  cancel(){
    location.href="#/StartMyCourse"
  }

  quetionlist:any;
  count:any;
  public GetAssessments() {
    debugger
    this.LearningService.GetAssessments().subscribe(
      data => {
        debugger
        this.quetionlist = data;
        
        // this.count = this.quetionlist.length;
      })
  }
}
