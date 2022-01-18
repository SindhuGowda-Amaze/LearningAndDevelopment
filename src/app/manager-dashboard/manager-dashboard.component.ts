import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  joblist: any;
  search: any;
  count: any;
  staffid: any;
  constructor(public LearningService: LearningService) { }

  ngOnInit(): void {
    this.staffid = localStorage.getItem('userid');
    this.GetCandidateReg()
    // this.insertdetails()
  }

  public GetCandidateReg() {
    debugger
    // if (this.staffid == undefined) {
    //   this.LearningService.GetCandidateRegistration().subscribe(data => {
    //     this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0);
    //     this.count = this.joblist.length;
    //   })
    // }
    // else {
    //   this.LearningService.GetCandidateRegistration().subscribe(data => {
    //     debugger
    //     this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0 && x.staffID == this.staffid);
    //     this.count = this.joblist.length;
    //   })

    // }
  }
  id:any;
  public getid(id:any){
  this.id = id
  }
  public Accept(){}
  public Reject(){}
  public Acceptcandidate(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Approved!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  public Rejecttcandidate(){}
}


