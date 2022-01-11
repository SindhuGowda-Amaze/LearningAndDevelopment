import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-course-mapping-form',
  templateUrl: './trainer-course-mapping-form.component.html',
  styleUrls: ['./trainer-course-mapping-form.component.css']
})
export class TrainerCourseMappingFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cancel() {
    location.href = "/TrainerCourseMapping";
  }
}
