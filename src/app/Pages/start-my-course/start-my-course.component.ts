import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-my-course',
  templateUrl: './start-my-course.component.html',
  styleUrls: ['./start-my-course.component.css']
})
export class StartMyCourseComponent implements OnInit {

  show: any;

  constructor() { }

  ngOnInit(): void {
    this.show = 0;
  }

  clickEvent(){
    this.show= 1;
  }

  public PreviewPdf() {
    window.open('assets/Images/Java_Assessment_Qts.pdf')
  }
  public PreviewPPT() {
    window.open('assets/Images/JAVA_PPT.ppt')
  }

}
