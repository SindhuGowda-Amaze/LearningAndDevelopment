import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-my-course-dashboard',
  templateUrl: './my-course-dashboard.component.html',
  styleUrls: ['./my-course-dashboard.component.css']
})
export class MyCourseDashboardComponent implements OnInit {

  constructor(public LearningService:LearningService) { }
  show:any;
  stafflist:any;
  userid:any;
  ngOnInit(): void {
    
    this.userid = sessionStorage.getItem('userid')

    // this.GetCourse();
    // this.LearningService.GetMyDetails().subscribe(data => {
    //   debugger
    //   this.stafflist = data.filter(x => x.id == this.userid);;
    // });
    // this.show=2;

    this. GetApproveCourse();
    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.id == this.userid);;
    });
    this.show=2;
  }

  coursedetails:any;

  public GetApproveCourse() {
    debugger
    this.LearningService.GetApproveCourse(this.userid).subscribe(data => {
      debugger
      this.coursedetails = data;
     
      debugger
    })
    this.show=2;
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
  Showcards(value:any){
   this.show=value;
  }

  enroll(){
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
}
