import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public LearningService: LearningService, public router: Router) { }
  stafflist: any;
  term: any;
  ngOnInit(): void {
    debugger

    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data;
    });
  }
  date: any;
  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.filterdate == this.date);
    });
  }

}
