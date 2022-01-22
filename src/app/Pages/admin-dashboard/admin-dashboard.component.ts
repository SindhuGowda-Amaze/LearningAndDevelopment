import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public LearningService: LearningService) { }
temp:any;
  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp');
    this.GetAllCounts()
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




  countlist:any;
  public GetAllCounts() {
    debugger
    this.LearningService.GetAllCounts().subscribe(
      data => {
        debugger
        this.countlist = data[0];
      })
  }
}
