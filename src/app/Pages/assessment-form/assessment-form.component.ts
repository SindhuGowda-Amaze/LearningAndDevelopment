import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.css']
})
export class AssessmentFormComponent implements OnInit {
  Course_Photo: any;
  Attachment: any;
  result: any;
  id: any;
  courseName:any;
  courselist:any;
  questionlist:any;
  constructor(public LearningService:LearningService, public ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.GetQuestionMaster();
    // this.ActivatedRoute.params.subscribe(params => {
    //   debugger
    //   this.id = params["id"];
    //   if (this.id != null && this.id != undefined) {
    //     this.GetQuestionMaster();
    //   }
    // })
  }

  public GetQuestionMaster() {
    debugger
    this.LearningService.GetQuestionMaster().subscribe(
      data => {
        debugger
        this.questionlist = data;
      })
  }

  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }



  cancel() {
    location.href = "/Assessmentdashboard";
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
