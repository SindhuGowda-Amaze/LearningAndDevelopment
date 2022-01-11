import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('temp') == '1') {
      localStorage.clear();
      location.reload();

    }
    this.GetLoginTypeMaster();
  } 
  GetLoginTypeMaster() {

    
  }

  public getRoleID(even: any) {
    debugger
    this.roleID = even.target.value;
  }

  public login() {

    if (this.userName == 'admin' && this.password == '1') {
      debugger
      sessionStorage.setItem('UserName', 'admin');
      sessionStorage.setItem('temp', '1');
      sessionStorage.setItem('role', 'Admin');
      location.href="#/AdminDashboard"
      sessionStorage.setItem('roleid', '1');
      location.reload();

      
    }
  }

}
