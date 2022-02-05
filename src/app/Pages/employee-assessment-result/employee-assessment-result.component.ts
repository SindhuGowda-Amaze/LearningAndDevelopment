import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-assessment-result',
  templateUrl: './employee-assessment-result.component.html',
  styleUrls: ['./employee-assessment-result.component.css']
})
export class EmployeeAssessmentResultComponent implements OnInit {


  joblist: any;
  search: any;
  count: any;
  staffid: any;
  manager: any;
  courselist: any;
  constructor(public LearningService: LearningService) { }

  ngOnInit(): void {
    this.getdetailslist();
    // this.show = 2;
    this.staffid = localStorage.getItem('userid');
    this.manager = localStorage.getItem('manager');

    this.LearningService.GetMyDetails().subscribe(
      data => {
        debugger
        // this.result = data.filter(x => x.manager == this.manager );
        this.result = data.filter(x => x.supervisor == sessionStorage.getItem('userid'));
      })
  }


  courseID: any;

  result: any;
  dummemployeedetails:any;
  public GetEnroll() {
    debugger
    this.LearningService.GetEnroll().subscribe(
      data => {
        debugger
        // this.result = data.filter(x => x.manager == this.manager );
        this.result = data
        this.dummemployeedetails = data
        this.count = this.result.length;

      })
  }

  detailslist: any;
  public getdetailslist() {
    debugger
    // this.empid = details.id;
    this.LearningService.GetTestResponse().subscribe(data => {
      debugger
      this.detailslist =data;
      //  data.filter(x => x.userID == details.id);
    });

  }

  empid: any
  MarksObtained: any;
  TotalMarks: any;
  public getdetailslist1() {
    debugger
    this.LearningService.GetApproveCourse(this.empid).subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }

  Staff:any;
  Course:any;
  view(staffname:any,coursename:any){
    this.Staff=staffname;
    this.Course=coursename;
  }





  // public AllocateCertificate() {
  //   debugger
  //   var entity = {
  //     'CourseID': this.courseID,
  //     'EmployeeID': this.empid,
  //     'MarksObtained': this.MarksObtained,
  //     'TotalMarks': this.TotalMarks
  //   }
  //   this.LearningService.InsertCertification(entity).subscribe(
  //     data => {
  //       debugger
  //       Swal.fire('Certificate Alloted Successfully');
  //       location.reload();
  //     })

  // }



}
