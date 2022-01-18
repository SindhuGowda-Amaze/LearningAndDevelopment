import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private LearningService:LearningService, private ActivatedRoute: ActivatedRoute) { }


  clientlist:any;
  clientlist1:any;
  count:any;
  clientstafflist:any;
  clientstafflist1:any;
  count1:any;
  Vendorlist:any;
  Vendorlist1:any;
  count2:any;
  CompanyStaffList:any;
  CompanyStaffList1:any;
  count3:any;
  vendorstafflist:any;
  vendorstafflist1:any;
  count4:any;

  search:any;
  showfullcards:any;

  ngOnInit(): void {
  // this.showfullcards=1;
  this.show1 = 1;
  // this.show2 = 1;
  // this.show3 = 1;
    //  this.show = 0;
  }

  enroll(){
    Swal.fire({
      title: 'Enroll Confirmation',
      text: "Please click on OK to send Course Enrolment Request",
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
          'Request Sent',
          'Your request has been sent to manager for Approval',
          'success'
        );
        location.href="/#/Catalog";

      }
      
    });
    
  }

  show:any;
  show1:any;
  show2:any;
  show3:any;
  show4:any;
  show5:any;

  // showcards(){
  //  debugger
  //  this.showfullcards=0;
  // }
  showcards1(value:any){
    debugger
      this.show1=value;
   }
   showcards2(value:any){
    debugger
    this.show2=value;
   }
   showcards3(value:any){
    debugger
    this.show3=value;
   }

  //  Showcards1(value:any){
  //   this.show1=value;
  //  }
  //  Showcards2(value:any){
  //   this.show2=value;
  //  }
  //  Showcards3(value:any){
  //   this.show3=value;
  //  }



}
