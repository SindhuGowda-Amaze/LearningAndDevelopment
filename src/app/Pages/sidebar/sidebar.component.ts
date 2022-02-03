import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  roleid: any;
  UserName: any;
  company_name: any;
  role: any;


  temp: any;
  show: any;
  ngOnInit(): void {
    this.temp = sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
  }



  public highlight(evt: any) {
    debugger
    var i, tablinks;
    //  localStorage.setItem("clickname",name)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }
   
  active:any;
  Dashboard(){
    this.active=2;
    localStorage.setItem("clickname","Dashboard")
  }

  chapterdashboard(){
    this.active=3;
    localStorage.setItem("clickname","Chapter  Dashboard")
  }

  assessments() {
    localStorage.setItem("clickname", "Assessments")
  }

  setup() {
    localStorage.setItem("clickname", "SETUP")
  }

  category() {
    localStorage.setItem("clickname", "CATEGORY")
  }

  course() {
    localStorage.setItem("clickname", "COURSE")
  }

  chapter() {
    localStorage.setItem("clickname", "CHAPTER")
  }

  trainer() {
    localStorage.setItem("clickname", "TRAINER")
  }

  assigntrainer() {
    localStorage.setItem("clickname", "ASSIGN TRAINER")
  }

  employee() {
    localStorage.setItem("clickname", "EMPLOYEE")
  }

  mycourse() {
    localStorage.setItem("clickname", "My COURSE")
  }
  attendence() {
    localStorage.setItem("clickname", "ATTENDENCE")
  }
  catalog() {
    localStorage.setItem("clickname", "CATALOG")
  }

  certificate() {
    localStorage.setItem("clickname", "CERTIFICATE")
  }

  assigncourse() {
    localStorage.setItem("clickname", "ASSIGN COURSE")
  }

  results() {
    localStorage.setItem("clickname", "RESULTS")
  }

  testsubmit() {
    localStorage.setItem("clickname", "Test Submitted")
  }




}
