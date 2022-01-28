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
  temp:any;
  constructor(public LearningService: LearningService, private router: Router) { }
  ngOnInit(): void {
    this.temp = sessionStorage.getItem('temp');


    if (localStorage.getItem('temp') == '1') {
      localStorage.clear();
      location.reload();

    }
    //   this.GetLoginTypeMaster();
  }
  GetLoginTypeMaster() {

    this.LearningService.GetLoginTypeMaster().subscribe(data => {

      this.loginTypeList = data;
    })
  }
  public getRoleID(even: any) {
    debugger
    this.roleID = even.target.value;
  }

  public login() {

    if (this.userName == 'admin' && this.password == '1') {
      debugger
      // location.reload();
      sessionStorage.setItem('UserName', 'admin');
      sessionStorage.setItem('temp', '1');
      sessionStorage.setItem('role', 'Admin');
      sessionStorage.setItem('roleid', '1');

      //  this.router.navigate(["AdminDashboard"]);

      location.href = "#/AdminDashboard";
      location.reload();




    }
    else if (this.roleID == 2) {
      this.LearningService.GetMyDetails().subscribe(data => {
        let temp: any = data.filter(x => (x.emailID == this.userName || x.phoneNo == this.userName) && x.password == this.password);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          debugger
          sessionStorage.setItem('UserName', this.result.name);
          sessionStorage.setItem('userid', this.result.id);
          console.log("Employeid",this.result.id)
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('manager', this.result.supervisor)
          sessionStorage.setItem('role', 'Employee');
          debugger
          sessionStorage.setItem('roleid', '2');
          location.href = "#/AdminDashboard";
          location.reload();
        }
        else {
          Swal.fire('Username or Password is invalid');
          this.userName = "";
          this.password = "";
        }
      })

    }

    else if (this.roleID == 3) {
      this.LearningService.GetMyDetails().subscribe(data => {
        let temp: any = data.filter(x => (x.emailID == this.userName || x.phoneNo == this.userName) && x.password == this.password);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem('UserName', this.result.name);
          sessionStorage.setItem('userid', this.result.id);
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('role', 'Manager');
          sessionStorage.setItem('roleid', '3');
          location.href = "#/ManagerDashboard";
          location.reload();
        }
        else {
          Swal.fire('Username or Password is invalid');
          this.userName = "";
          this.password = "";
        }

      })

    }



    else if (this.roleID == 4) {
      this.LearningService.GetTrainer().subscribe(data => {
        let temp: any = data.filter(x => (x.phoneNo == this.userName || x.email == this.userName) && x.password == this.password);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem('UserName', this.result.name);
          sessionStorage.setItem('userid', this.result.id);
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('role', 'Trainer');
          sessionStorage.setItem('roleid', '4');
          location.href = "#/Assessmentdashboard";
          location.reload();


        }
        else {
          Swal.fire('Username or Password is invalid');
          this.userName = "";
          this.password = "";
        }

      })

    }
  }
}


