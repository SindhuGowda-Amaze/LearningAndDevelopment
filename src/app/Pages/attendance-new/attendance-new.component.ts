import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-attendance-new',
  templateUrl: './attendance-new.component.html',
  styleUrls: ['./attendance-new.component.css']
})
export class AttendanceNewComponent implements OnInit {

  constructor(private LearningService:LearningService) { }

  ngOnInit(): void {
    this.GetAttendance_New();
  }



  Attendance:any;
  public GetAttendance_New() {
    debugger
    this.LearningService.GetAttendance_New().subscribe(
      data => {
        debugger
        this.Attendance=data;
      })
  }





  



}
