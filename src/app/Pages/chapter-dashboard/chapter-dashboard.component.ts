import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-chapter-dashboard',
  templateUrl: './chapter-dashboard.component.html',
  styleUrls: ['./chapter-dashboard.component.css']
})
export class ChapterDashboardComponent implements OnInit {
  coursedetails:any;

  constructor(private LearningService:LearningService) { }

  ngOnInit(): void {
    this.GetChapter();
  }

  // public GetChapterAttachmentByChapterID() {
     
  //   this.GetChapterAttachmentByChapterID().subscribe(data => {   
  //   this.coursedetails= data;  
  //   })
  // }



  public GetChapter() {
     
    this.LearningService.GetChapter().subscribe(data => {   
    this.coursedetails = data;      
    })
  }
 
  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public PreviewVideo() {
    window.open('assets/Images/Java_Course.mp4')
  }
  
  public PreviewPPT() {
    window.open('assets/Images/JAVA_PPT.ppt')
  }
  

}
