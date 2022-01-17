import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-take-assessment',
  templateUrl: './take-assessment.component.html',
  styleUrls: ['./take-assessment.component.css']
})
export class TakeAssessmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  }

  cancel(){
    location.href="#/StartMyCourse"
  }
}
