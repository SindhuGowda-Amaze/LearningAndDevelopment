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
      position: 'center',
      icon: 'success',
      title: 'Your Assessment is completed and Your inputs has been saved',
      showConfirmButton: true,
      timer: 3000
    })
  }
}
