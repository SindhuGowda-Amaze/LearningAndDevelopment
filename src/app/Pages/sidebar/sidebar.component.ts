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

  active: any;
  Dashboard() {
    this.active = 2;
    localStorage.setItem("clickname", "Dashboard")
  }

  chapterdashboard() {
    this.active = 'Chapter';
    localStorage.setItem("clickname", "Chapter  Dashboard")
  }

  assessments() {
    this.active = 'Assessments';
    localStorage.setItem("clickname", "Assessments")
  }

  setup() {
    this.active = 'setup'
    localStorage.setItem("clickname", "SETUP")
  }

  category() {
    this.active = 'category';
    localStorage.setItem("clickname", "CATEGORY")
  }

  managementstaffleaveview() {
    this.active = 'managementstaffleaveview';
    localStorage.setItem("clickname", "Staff Leave Details")
  }
  studentattedance() {
    this.active = 'studentattedance';
    localStorage.setItem("clickname", "Student Attedance")
  }
  contentfeedback() {
    this.active = 'contentfeedback';
    localStorage.setItem("clickname", "Content Feedback")
  }
  coursecompletion() {
    this.active = 'coursecompletion';
    localStorage.setItem("clickname", "Course Completion")
  }
  feereport() {
    this.active = 'feereport';
    localStorage.setItem("clickname", "Fee Report")
  }
  timetabledsh() {
    this.active = 'timetabledsh';
    localStorage.setItem("clickname", "Timetable")
  }

  staffleaves() {
    this.active = 'staffleaves';
    localStorage.setItem("clickname", "My Leaves")
  }


  course() {
    this.active = 'course'
    localStorage.setItem("clickname", "COURSE")
  }

  chapter() {
    this.active = 'chapter'
    localStorage.setItem("clickname", "CHAPTER")
  }

  center() {
    this.active = 'center'
    localStorage.setItem("clickname", "CENTER")
 
  }

  trainer() {
    this.active = 'trainer'
    localStorage.setItem("clickname", "TRAINER")
  }

  assigntrainer() {
    this.active = 11;
    localStorage.setItem("clickname", "ASSIGN TRAINER")
  }

  employee() {
    this.active = 'employee'
    localStorage.setItem("clickname", "EMPLOYEE")
  }

  mycourse() {
    this.active = 'mycourse';
    localStorage.setItem("clickname", "My COURSE")
  }
  attendence() {
    this.active = 'ATTENDANCE';
    localStorage.setItem("clickname", "ATTENDANCE")
  }
  catalog() {
    this.active = 'catalogue';
    localStorage.setItem("clickname", "CATALOG")
  }

  certificate() {
    localStorage.setItem("clickname", "CERTIFICATE")
  }

  assigncourse() {
    this.active = 'ASSIGNCourse';
    localStorage.setItem("clickname", "ASSIGN COURSE")
  }

  results() {
    this.active = 'result';
    localStorage.setItem("clickname", "RESULTS")
  }

  testsubmit() {
    this.active = 'submitest';
    localStorage.setItem("clickname", "Test Submitted")
  }

  employeeAssessment() {
    this.active = 'employeeAssessment';
    localStorage.setItem("clickname", "Employee Assessment")
  }


  Assessmentresult() {
    this.active = 'assessmentresult';
    localStorage.setItem("clickname", "Employee Assessment Result")
  }

  TraineeReport() {
    this.active = 'traineeReport';
    localStorage.setItem("clickname", "Trainee Report")
  }


  help() {
    this.active = 'help'
    localStorage.setItem("clickname", "HELP")
  }

  SupportTickets() {
    this.active = 'SupportTickets'
    localStorage.setItem("clickname", "support tickets")
  }


}
