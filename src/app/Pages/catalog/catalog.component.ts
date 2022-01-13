import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute) { }


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
  

  ngOnInit(): void {
  }

  enroll(){
    Swal.fire({
      title: 'Enroll Confirmation',
      text: "Please click on OK to proceed with course enrolment.",
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
          'Enrolled',
          'Successfully Assigned',
          'success'
        )
      }
    })
  }


}
