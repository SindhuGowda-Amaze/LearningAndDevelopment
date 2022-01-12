import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roledid: any;
  result: any;
  roleID: any;
  userName: any;
  password: any;
  username: any;
  loginTypeList: any;

  constructor(public LearningService:LearningService) { }

  ngOnInit(): void {
    localStorage.getItem('temp') == '1'
    // if (localStorage.getItem('temp') == '1') {
    //   localStorage.clear();
    //   location.reload();

    // }
    // this.GetLoginTypeMaster();
  }

  // GetLoginTypeMaster() {

  //   this.LearningService.GetLoginTypeMaster().subscribe(data => {

  //     this.loginTypeList = data;
  //   })
  // }




  public login() {
    debugger
    //  if (this.userName == 'admin' && this.password == '1') {
    debugger
    sessionStorage.setItem('UserName', 'admin');
    sessionStorage.setItem('temp', '1');
    sessionStorage.setItem('role', 'Admin');
    sessionStorage.setItem('roleid', '1');
    // this.router.navigate(["/Dashboard"]);
    location.href = "/AdminDashboard"

     }
    //  else if(this.userName == 'emp' && this.password == '2'){
    //   sessionStorage.setItem('UserName', 'emp');
    //   sessionStorage.setItem('temp', '2');
    //   sessionStorage.setItem('role', 'Employee');
    //   sessionStorage.setItem('roleid', '2');
    //   // this.router.navigate(["/Dashboard"]);
    //   location.href = "/AdminDashboard"
    //  }

  //    else if (this.roleID == 2){
  //     this.LearningService.GetRecruiterStaff().subscribe(data => {
  //       let temp: any = data.filter(x => (x.email == this.userName || x.phoneNo == this.userName) && x.password == this.password);
  //       this.result = temp[0];
  //       debugger;
  //       // this.loader = true;
  //       if (this.result != undefined || this.result != null) {
  //         sessionStorage.setItem('UserName', this.result.name);
  //         sessionStorage.setItem('userid', this.result.id);
  //         sessionStorage.setItem('temp', '1');
  //         sessionStorage.setItem('role', 'employee');
  //         sessionStorage.setItem('roleid', '2');
  //         location.href = "#/Dashboard";
  //         location.reload();
       

  //       }
  //       else {
  //         Swal.fire('Username or Password is invalid');
  //         this.userName = "";
  //         this.password = "";
  //       }
       
  //   }) 
     
  //   }
  // }
    }
    

