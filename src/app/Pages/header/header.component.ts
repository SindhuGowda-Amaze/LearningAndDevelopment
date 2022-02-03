import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  company_name: any;
  temp: any
  roleid: any;
  role: any;
  UserName: any;
  page: any;
  time: any;
  hh: any;
  mm: any;
  ampm: any;
  constructor() { }
  ngOnInit(): void {
    this.temp = sessionStorage.getItem('temp');

    setInterval(() => {
      var time = new Date();
      this.time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      let temp: any = this.time.split(':');
      this.hh = temp[0];
      let temp1: any = this.time.split(':')[1].split(" ");
      this.mm = temp1[0];
      this.ampm = temp1[1];
    }, 1000);

    interval(1000).subscribe((x => {
      this.page = localStorage.getItem('clickname')
    }));


    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();

    location.href = "#/Login";
    location.reload();
  }











}
