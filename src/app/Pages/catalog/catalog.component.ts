import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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


}
