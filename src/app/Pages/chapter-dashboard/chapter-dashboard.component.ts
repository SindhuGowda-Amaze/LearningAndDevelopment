import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-chapter-dashboard',
  templateUrl: './chapter-dashboard.component.html',
  styleUrls: ['./chapter-dashboard.component.css']
})
export class ChapterDashboardComponent implements OnInit {
  coursedetails: any;

  constructor(private LearningService: LearningService) { }

  ngOnInit(): void {
    this.GetChapter();
  }

  // public GetChapterAttachmentByChapterID() {

  //   this.GetChapterAttachmentByChapterID().subscribe(data => {   
  //   this.coursedetails= data;  
  //   })
  // }



  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(data => {
      debugger
      this.coursedetails = data;
      debugger
    })
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public PreviewVideo() {
    window.open('assets/Images/Java_Course.mp4')
  }

  public PreviewPPT() {
    window.open('assets/Images/JAVA_PPT.ppt')
  }


  Attachmentlist: any;

  ShowAttachments(id: any) {
    debugger
    this.LearningService.GetChapterAttachmentByChapterID(id).subscribe(data => {
      debugger
      this.Attachmentlist = data;
    })
  }
}
