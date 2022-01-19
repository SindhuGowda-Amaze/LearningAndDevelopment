import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { LearningService } from 'src/app/learning.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  Course_Photo: any
  Attachment: any[] = [];
  result: any;
  constructor(public LearningService: LearningService) { }

  ngOnInit(): void {
    this.GetCourse();
  }
  cancel() {
    location.href = "/ChapterDashboard";
  }

  files1: File[] = [];

  onSelect1(event: any) {
    this.files1.length=0;
    this.files1=[];
    console.log(event);
    this.files1.push(...event.addedFiles);
    this.uploadattachments1();
  }

  onRemove1(event: any) {
    console.log(event);
    this.files1.splice(this.files1.indexOf(event), 1);
  }

  file: any;
  public uploadattachments1() {
    debugger
    this.LearningService.AttachmentsUpload(this.files1).subscribe(res => {
      debugger
      this.file = res;
      this.Attachment.push(this.file);
      console.log("Attchaments",this.Attachment);
      alert("ATTACHMENT UPLOADED");
    })
  }


  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }


  CourseID: any;
  name: any;
  description: any;
  ChapterPhoto: any;
  ChapterText: any;
  chapterID: any;

  getCourseID(even:any)
  {
    debugger
    this.CourseID=even.target.value;
  }

  Save() {
    debugger
    var json = {
      "CourseID": this.CourseID,
      "Name": this.name,
      "Description": this.description,
      "chapterPhoto": this.ChapterPhoto,
      "chapterText": this.ChapterText,
    };
    this.LearningService.InsertChapter(json).subscribe(
      data => {
        debugger
        this.chapterID = data;
        this.insertAttchmentFiles()
        Swal.fire("saved Sucessfully");
        location.href = "#/ChapterDashboard"
      })
  }


  insertAttchmentFiles() {
    for (let i = 0; i < this.Attachment.length; i++) {
      var entity = {
        "ChapterID": this.chapterID,
        "ChapterAttachmentUrl": this.Attachment[i]
      }
      this.LearningService.InsertChapterAttachment(entity).subscribe(
        data => {
          debugger
         
        })



    }
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.uploadattachments();
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public uploadattachments() {
    debugger
    this.LearningService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.ChapterPhoto = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

}
