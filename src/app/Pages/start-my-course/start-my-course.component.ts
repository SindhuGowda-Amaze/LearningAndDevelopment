import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-my-course',
  templateUrl: './start-my-course.component.html',
  styleUrls: ['./start-my-course.component.css']
})
export class StartMyCourseComponent implements OnInit { 

  courseid:any;
  coursedetails:any;
  coursename:any;
  chaptername:any;
  chapterdescription:any;
  chapterphoto:any;
  noattachments:any;
 

  constructor(private LearningService: LearningService, private ActivatedRoute:ActivatedRoute) { }
   
  Attachmentlist:any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
     debugger
      this.courseid = params['id'];
      this.GetChapter();

    }
    )
    this.show = 1;
  
  }

  clickEvent(){
    this.show= 1;
  }


  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(data => {
      debugger
      this.coursedetails = data.filter(x=>x.courseID==this.courseid);
      debugger
      this.coursename=this.coursedetails[0].courseName
      this.chaptername=this.coursedetails[0].name
      this.chapterdescription=this.coursedetails[0].description    
      this.chapterphoto=this.coursedetails[0].chapterPhoto  
      this.ShowAttachments(this.coursedetails[0].id)
      this.show=1
    })
  }

  getcoursedetails(details:any){
      this.coursename=details.courseName
      this.chaptername=details.name
      this.chapterdescription=details.description 
      this.chapterphoto=details.chapterPhoto
      this.ShowAttachments(details.id)
      this.show=1
  }

  ShowAttachments(id: any) {
    debugger
    this.LearningService.GetChapterAttachmentByChapterID(id).subscribe(data => {
      debugger
      this.Attachmentlist = data;
    })
  }




  public PreviewVideo() {
    debugger
   if(this.Attachmentlist.length!=0){
     this.Attachmentlist=this.Attachmentlist.filter((x: { attachmentType: string; })=>x.attachmentType =='video')
     if(this.Attachmentlist.length!=0){
      this.show=2
     }
     else{
      this.noattachments="No Videos Found"
      this.show=5
    }
    
   }
   else{
     this.noattachments="No Videos Found"
     this.show=5
   }

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

  // DisableStaff1(value: any) {

  //   var eb = {

  //     'ID': value,
  //     'Enable_Disable': 0
  //   }
    
  // }

  DisableStaff1(){
    this.show= 1;
  }
  

}
