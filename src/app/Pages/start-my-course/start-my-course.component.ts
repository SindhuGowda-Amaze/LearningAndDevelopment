import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-my-course',
  templateUrl: './start-my-course.component.html',
  styleUrls: ['./start-my-course.component.css']
})
export class StartMyCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.show = 1;
  
  }

  clickEvent(){
    this.show= 1;
  }


  public PreviewVideo() {
    window.open('assets/Images/Java_Course.mp4')
  }
  public PreviewPdf() {
    window.open('assets/Images/Java_Assessment_Qts.pdf')
  }
  public PreviewPPT() {
    window.open('assets/Images/JAVA_PPT.ppt')
  }
  public PreviewMSword() {
    window.open('assets/Images/Java_Test_Words.docx')
  }
  public PreviewIMG() {
    window.open('assets/Images/Java_CourseIMG.jpg')
  }

  show:any;
  show1:any;
  show2:any;
  show3:any;
  show4:any;
  show5:any;

  showcards(value:any){
   debugger
   this.show=value;
  }
  

}
