import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.css']
})
export class AssessmentFormComponent implements OnInit {
  Course_Photo: any;
  Attachment: any;
  result: any;
  result1: any;
  results: any;
  courseid: any;
  chapterid: any;
  questionid: any;
  courseName: any;
  public Editor = ClassicEditor;
  constructor(public LearningService: LearningService, public ActivatedRoute: ActivatedRoute) { }
  CourseList: any;
  ChapterList: any;
  QuestionList: any;
  id: any;



  ngOnInit(): void {
    this.GetQuestionMaster();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.questionid = params["id"];
      if (this.questionid != null && this.questionid != undefined) {
        this.GetQuestionMaster();
      }
    })

    this.GetChapter();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.chapterid = params["id"];
      if (this.chapterid != null && this.chapterid != undefined) {
        this.GetChapter();
      }
    })

    this.GetCourse();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.courseid = params["id"];
      if (this.courseid != null && this.courseid != undefined) {
        this.GetCourse();
      }
    })

    // this.show = 1;
    // this.show2 = 1;
  }

  public GetQuestionMaster() {
    debugger
    this.LearningService.GetQuestionMaster().subscribe(
      data => {
        debugger
        this.QuestionList = data;
      })
  }


  dumchapterlist:any;
  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(
      data => {
        debugger     
        this.dumchapterlist=data;
      })
  }
  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.CourseList = data;
      })
  }



  cancel() {
    location.href = "/Assessmentdashboard";
  }
  files1: File[] = [];

  onSelect1(event: any) {
    console.log(event);
    this.files1.push(...event.addedFiles);
    this.uploadattachments1();
  }

  onRemove1(event: any) {
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
      this.Attachment = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
  Question: any;
  Option1: any;
  Option2: any;
  Option3: any;
  Option4: any;
  CorrectAnswer: any;
  Weightage: any;
  Save() {
    debugger
    var json = {
      "CourseID": this.courseid,
      "ChapterID": this.chapterid,
      "QuestionID": this.questionid,
      "Question": this.Question,
      "Option1": this.Option1,
      "Option2": this.Option2,
      "Option3": this.Option3,
      "Option4": this.Option4,
      "CorrectAnswer": this.CorrectAnswer,
      "weightage": this.Weightage,

    };
    this.LearningService.InsertAssessments(json).subscribe(
      data => {
        debugger
        let id = data;
        Swal.fire("saved Sucessfully");
        location.href = "#/Assessmentdashboard"
      })
  }

  getCorrectAnswer(event: any) {
    debugger
    let value: any = event.target.value;
    if (value == 'A') {
      this.CorrectAnswer = this.Option1;
    }
    if (value == 'B') {
      this.CorrectAnswer = this.Option2;
    }
    if (value == 'C') {
      this.CorrectAnswer = this.Option3;
    }
    if (value == 'D') {
      this.CorrectAnswer = this.Option4;
    }


  }
  show: any;
  show2: any;

  // ShowObjectives(value:any){
  //   debugger
  //   this.show=value;
  // }
  // ShowSubjectives(value:any){
  //   debugger
  //   this.show2=value;
  // }

  getcourseid(even:any){
    this.courseid=even.target.value;
    this.ChapterList=this.dumchapterlist.filter((x: { courseID: any; })=>x.courseID==this.courseid)
  }

}
