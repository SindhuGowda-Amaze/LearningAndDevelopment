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
  count:any;
  quetionlist:any;
  ngOnInit(): void {
   this. GetAssessmentResult()
    this.GetAssessments();
    this.GetCourse();
  }



  courseid:any;
  coursedetails:any;
  dummcoursedetails:any;
  getcourseid(even: any) {
    this.courseid = even.target.value;
    if (even.target.value != 0) {
      this.coursedetails = this.dummcoursedetails.filter((x: { courseID: any; }) => x.courseID == this.courseid)
    }

  }




   

  courselist:any;
  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }


  assessmentlist:any;
  public GetAssessmentResult() {
    debugger
    this.LearningService.GetAssessmentResult().subscribe(
      data => {
        debugger
        this.assessmentlist = data;
      })
  }





  public GetAssessments() {
    debugger
    this.LearningService.GetAssessments().subscribe(
      data => {
        debugger
        this.quetionlist = data;
        this.count = this.quetionlist.length;
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


  // checkbutton(){
  //   location.href="/Checkanswer"
  // }







}
