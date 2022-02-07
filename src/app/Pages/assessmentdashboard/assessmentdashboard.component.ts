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
    debugger
    this.courseid = even.target.value;
    if (even.target.value != 0) {
      debugger
      this.quetionlist = this.dummquetionlist.filter((x: { courseID: any; }) => x.courseID == this.courseid)
    }
    else{
      debugger
      this.GetAssessments()
    }

  }

<<<<<<< HEAD
=======

>>>>>>> 2dc3fbd791904d00dca64f34f4e1141114103e1e
  courselist:any;
  public GetCourse() {
    debugger
    this.LearningService.GetCourseDropdown().subscribe(
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
  dummquetionlist:any;
  public GetAssessments() {
    debugger
    this.LearningService.GetAssessments().subscribe(
      data => {
        debugger
        this.quetionlist = data;
        this.dummquetionlist = data;
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


  checkbutton(){
    location.href="/Checkanswer"
  }

   








}
