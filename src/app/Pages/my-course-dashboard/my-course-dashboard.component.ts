import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-my-course-dashboard',
  templateUrl: './my-course-dashboard.component.html',
  styleUrls: ['./my-course-dashboard.component.css']
})
export class MyCourseDashboardComponent implements OnInit {

  constructor(public LearningService: LearningService) { }
  show: any;
  stafflist: any;
  userid: any;
  search: any;
  ngOnInit(): void {

    this.userid = sessionStorage.getItem('userid')
    this.manager = sessionStorage.getItem('manager')

   this.Showcards(2);
    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.id == this.userid);;
    });
    // this.show=2;

    
    this.GetAllCounts();
    this.show = 2;
  }

  coursedetails: any;



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
  Showcards(value: any) {
    this.show = value;
    if (value == 1) {
      this.GetCourse();
    }
    else if (value == 2) {
      this.GetApproveCourse();
    }
   else if (value == 3) {
      this.GetCourse();
    }

  }

  getcourseid(id:any)
  {
    this.courseid=id;
  }

  latestcoursedetails:any;

  public GetApproveCourse() {
    debugger
    this.LearningService.GetApproveCourse(this.userid).subscribe(data => {
      debugger
      this.coursedetails = data;
      this.latestcoursedetails = data[0];

      debugger
    })
  }


  GetCourse() {
    this.LearningService.GetCourse().subscribe(data => {
      debugger
      this.coursedetails = data;
    });
  }

  manager:any;
  course: any
  name: any;
  mobile: any;
  emailID: any;
  courseid:any;
  enroll(name: any, mobile: any, emailID: any) {
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
        debugger
        var json = {
          "staffid": this.userid,
          "manager": this.manager,
          "courseid": this.courseid,
          "status": 'Manager Pending',
          "employeeName": name,
          "phoneNo": mobile,
          "email": emailID,
          "type":'Request to Manager'
        };
        this.LearningService.InsertEnroll(json).subscribe(
          data => {
            debugger
            let id = data;
            location.href = "#/Catalog"
          })
        Swal.fire(
          'Request Sent',
          'Your request has been sent to manager for Approval',
          'success'
        );
        location.href = "#/Catalog";
      }
    });
  }

  countlist: any;
  public GetAllCounts() {
    debugger
    
      this.LearningService.GetAllCounts(0, 2).subscribe(
        data => {
          debugger
          this.countlist = data[0];
        })
    

  }








}
