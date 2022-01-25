import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-course-to-employee',
  templateUrl: './assign-course-to-employee.component.html',
  styleUrls: ['./assign-course-to-employee.component.css']
})
export class AssignCourseToEmployeeComponent implements OnInit {
  id:any;
  result:any;
  CourseList:any;
  BatchList:any;
  EmailID:any;
  StartDate:any;
  EndDate:any;
  BatchName:any;
  AllowedStudents:any;
  constructor() { }

  ngOnInit(): void {
  }

}
