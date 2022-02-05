import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-attendance-new',
  templateUrl: './attendance-new.component.html',
  styleUrls: ['./attendance-new.component.css']
})
export class AttendanceNewComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private LearningService: LearningService) { }
  search: any;
  id: any;
  result: any;
  count: any;

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
