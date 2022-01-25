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

  constructor(private LearningService: LearningService, private ActivatedRoute: ActivatedRoute) { }


  clientlist: any;
  clientlist1: any;
  count: any;
  clientstafflist: any;
  clientstafflist1: any;
  count1: any;
  Vendorlist: any;
  Vendorlist1: any;
  count2: any;
  CompanyStaffList: any;
  CompanyStaffList1: any;
  count3: any;
  vendorstafflist: any;
  vendorstafflist1: any;
  count4: any;
  courseid: any;
  stafflist: any;
  search: any;
  showfullcards: any;
  categorylist: any;
  userid: any;
  manager: any;



  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.GetCourse();
    this.show1 = 1;
    this.GetCategoryMaster();


    this.manager = sessionStorage.getItem('manager')

    this.LearningService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.id == this.userid);;
    });
    // this.showfullcards=1;
    this.show1 = 1;
    // this.show2 = 1;
    // this.show3 = 1;
    //  this.show = 0;
  }
  public getcoureid(id: any) {
    this.courseid = id
  }




  course: any
  name: any;
  mobile: any;
  emailID: any;
  enroll(name: any, mobile: any, emailID: any) {
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
        debugger
        var json = {
          "staffid": this.userid,
          "manager": this.manager,
          "courseid": this.courseid,
          "status": 'Manager Pending',
          "employeeName": name,
          "phoneNo": mobile,
          "email": emailID
        };
        this.LearningService.InsertEnroll(json).subscribe(
          data => {
            debugger
            let id = data;
            Swal.fire("saved Sucessfully");
            location.href = "#/Catalog"
          })
        Swal.fire(
          'Request Sent',
          'Your request has been sent to manager for Approval',
          'success'
        );
        location.href = "/#/Catalog";
      }
    });
  }


  show: any;
  show1: any;
  show2: any;
  show3: any;
  show4: any;
  show5: any;
  course1: any;
  course2: any;
  course3: any;
  course4: any;

  // showcards(){
  //  debugger
  //  this.showfullcards=0;
  // }
  showcards1(value: any) {
    debugger
    this.show1 = value;
  }
  showcards2(value: any) {
    debugger
    this.show2 = value;
  }
  showcards3(value: any) {
    debugger
    this.show3 = value;
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

  // showcards(id)
  // {
  //   this.courselist=this.courselist.filter(x=>x.)
  // }

  categorylist1: any;
  categorylist2: any;
  categorylist3: any;
  categorylist4: any;
  public GetCategoryMaster() {
    debugger
    this.LearningService.GetCategoryMaster().subscribe(
      data => {
        debugger

        this.categorylist = data.slice(0, 1);
        this.categorylist1 = data.slice(1, 2);
        this.categorylist2 = data.slice(2, 3);
        this.categorylist3 = data.slice(3, 4);
        this.categorylist4 = data.slice(4, 5);
      })
  }

  courselist: any;
  public GetCourse() {
    debugger
    this.LearningService.GetCoursesByUserID(this.userid).subscribe(
      data => {
        debugger
        this.courselist = data;
        this.count = this.courselist.length;

      })
    this.show1 = 1;
  }


  public filtercourse(name: any) {
    debugger
    this.LearningService.GetEnroll().subscribe(
      data => {
        debugger
        this.courselist = data.filter(x => x.categoryName == name && x.status != 'Manager Approved' && x.staffID == this.userid);
      })
    this.show1 = 1;
  }

}
function Save() {
  throw new Error('Function not implemented.');
}

