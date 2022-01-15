import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-course-dashboard',
  templateUrl: './my-course-dashboard.component.html',
  styleUrls: ['./my-course-dashboard.component.css']
})
export class MyCourseDashboardComponent implements OnInit {

  constructor() { }
  show:any;
  ngOnInit(): void {
    this.show=1;
  }
  public flip1(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card1") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };
  Showcards(value:any){
   this.show=value;
  }

}
