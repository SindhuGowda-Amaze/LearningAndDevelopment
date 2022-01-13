import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  Attachment:any
  Course_Photo:any;
  constructor(public LearningService:LearningService) { }

  ngOnInit(): void {
  }
  cancel() {
    location.href = "/ChapterDashboard";
  }
  
  files1: File[] = [];

  onSelect1(event:any) {
    console.log(event);
    this.files1.push(...event.addedFiles);
    this.uploadattachments1();
  }
  
  onRemove1(event:any) {
    console.log(event);
    this.files1.splice(this.files1.indexOf(event), 1);
  }

  public uploadattachments1() {
    debugger
    this.LearningService.AttachmentsUpload(this.files1).subscribe(res => {
      debugger
      this.Course_Photo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }


  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.uploadattachments();
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public uploadattachments() {
    debugger
    this.LearningService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.Attachment = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

}
