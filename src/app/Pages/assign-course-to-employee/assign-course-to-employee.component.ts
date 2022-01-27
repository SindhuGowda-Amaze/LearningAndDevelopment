import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-assign-course-to-employee',
  templateUrl: './assign-course-to-employee.component.html',
  styleUrls: ['./assign-course-to-employee.component.css']
})
export class AssignCourseToEmployeeComponent implements OnInit {
 
  constructor(private LearningService: LearningService, private ActivatedRoute: ActivatedRoute) { }

  courselist:any;
  userid:any;
  stafflist:any;
  type:any;
  manager:any;
  courseid:any;
  name: any;
  mobile: any;
  emailID: any;
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.GetCourse();
    this.GetStaff();
  }


  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.courselist = data;
        // this.count = this.courselist.length;

      })
  }

  public GetStaff(){
    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.id == this.userid);;
    });
  }

  Cancel(){
    location.reload();
  }
  public getcoureid(id: any) {
    this.courseid = id
  }


    enroll(name: any, mobile: any, emailID: any) {
      Swal.fire({
        title: 'Enroll Confirmation',
        text: "Please click on OK to Assign Course To Employee",
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
            "type":this.type
          };
          this.LearningService.InsertEnroll(json).subscribe(
            data => {
              debugger
              let id = data;
            })
          Swal.fire(
            'Cousre Assigned Successfully!!!',
            'success'
          );
          location.href = "/#/Catalog";
        }
      });
    }

}
