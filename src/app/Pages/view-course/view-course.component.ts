import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enroll(){
    Swal.fire({
      title: 'Enroll Confirmation',
      text: "Please click on OK to proceed with course enrolment.",
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
          'Enrolled',
          'Successfully Assigned',
          'success'
        )
      }
    })
  }
}
