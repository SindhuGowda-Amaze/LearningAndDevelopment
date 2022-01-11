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
    sessionStorage.getItem('temp') == '1'
  }

  public login() {
    debugger
    // if (this.userName == 'admin' && this.password == '1') {
    debugger
    sessionStorage.setItem('UserName', 'admin');
    sessionStorage.setItem('temp', '1');
    sessionStorage.setItem('role', 'Admin');
    sessionStorage.setItem('roleid', '1');
    // this.router.navigate(["/Dashboard"]);
    location.href = "/Trainer"

    // }
  }
}
