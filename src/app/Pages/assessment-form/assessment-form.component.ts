import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
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
  }

  public GetQuestionMaster() {
    debugger
    this.LearningService.GetQuestionMaster().subscribe(
      data => {
        debugger
        this.QuestionList = data;
      })
  }



  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(
      data => {
        debugger
        this.ChapterList = data;
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
  marks:any;
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
      "marks": this.marks,

    };
    this.LearningService.InsertAssessments(json).subscribe(
      data => {
        debugger
        let id = data;
        Swal.fire("saved Sucessfully");
        location.href = "#/Assessmentdashboard"
      })
  }



}
