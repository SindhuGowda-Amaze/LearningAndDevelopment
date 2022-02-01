import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  Course_Photo: any
  Attachment: any[] = [];
  result: any;

  constructor(public LearningService: LearningService, private ActivatedRoute: ActivatedRoute) { }
  public Editor = ClassicEditor;
  id: any;
  CourseID: any;
  courseID: any;
  Name: any;
  name: any;

  description: any;
  ChapterPhoto: any;
  chapterID: any;
  CourseName: any;
  courseName: any;
  chapterText: any;
  show:any;
  Attachmentlist:any;


  ngOnInit(): void {
    this.courseID=0;
    this.GetCourse();
    

    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.show=1
        this.GetChapter();
        
        this.LearningService.GetChapterAttachmentByChapterID(this.id).subscribe(data => {
          debugger
          this.Attachmentlist = data;
        })
        
      }
      else{
        this.show=0;
      }
    })
  }
  showChapterPhoto:any;
  public GetChapter(){
    this.LearningService.GetChapter().subscribe(
      data => {
      this.result = data;
      debugger
      this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
      this.courseID=this.result[0].courseID;
      this.name=this.result[0].name;
      this.description=this.result[0].description;
      this.ChapterPhoto=this.result[0].orginalChapterPhoto;
      this.showChapterPhoto=this.result[0].chapterPhoto;
      this.chapterText=this.result[0].chapterText;
      this.chapterID=this.result[0].courseID;
  
        }
      ) 
    }

   
  Cancel() {
    location.href = "/#/ChapterDashboard";
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

  courselist:any;
  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }


  
  getCourseID(even:any)
  {
    debugger
    this.courseID=even.target.value;
  }

  
  openAttchments(photo: any) {
    window.open(photo, "_blank")
  }
 





  Update(){
    debugger
     var json = {
      "ID": this.id,
      "courseID": this.courseID,
      "Name": this.name,
      "Description": this.description,
      "ChapterPhoto": this.ChapterPhoto,
      "ChapterText": this.chapterText        
      };
    
      this.LearningService.UpdateChapter(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href="/#/ChapterDashboard";
      })
  }

  Save() {
    debugger
    var json = {
      "courseID": this.courseID,
      "Name": this.name,
      "Description": this.description,
      "ChapterPhoto": this.ChapterPhoto,
      "ChapterText": this.chapterText 
    };
    this.LearningService.InsertChapter(json).subscribe(
      data => {
        debugger
        this.chapterID = data;
        this.insertAttchmentFiles()
        Swal.fire("Saved Sucessfully");
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

  photourl:any;
  photoid:any;
  Edit(attchments:any){
    this.photourl=attchments.originalurl;
    this.photoid=attchments.id

  }








}
