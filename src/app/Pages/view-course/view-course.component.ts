import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }

  courseid: any;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.courseid = params['id'];
      this.GetTrainerCourseMapping();
      this.GetChapter()
    })
  }
  enroll() {
    Swal.fire({
      title: 'Enroll Confirmation',
      text: "Please click on OK to send Course Enrolment Request",
      icon: 'warning',
      // icon: 'success',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Request Sent',
          'Your request has been sent to manager for Approval',
          'success'
        )
      }
    })
  }
  public flip1(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card1") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  public PreviewPdf() {
    window.open('assets/Images/JAVA-Stack-Brochure.pdf', "blank")
  }

  chapterdetails: any;

  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(
      data => {
        debugger
        this.chapterdetails = data.filter(x => x.courseID == this.courseid);
      })
  }






  coursedetails: any;

  public GetTrainerCourseMapping() {
    debugger
    this.LearningService.GetTrainerCourseMapping().subscribe(data => {
      debugger
      this.coursedetails = data.filter(x => x.courseID == this.courseid);
      debugger
    })
  }

  rowno: any;
  showchapter:any;
  GetDetails(details: any) {
    debugger
    this.rowno = details.rowno;
    this.showchapter=details.Description;
  }


}

