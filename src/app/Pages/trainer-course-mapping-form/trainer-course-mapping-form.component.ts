import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trainer-course-mapping-form',
  templateUrl: './trainer-course-mapping-form.component.html',
  styleUrls: ['./trainer-course-mapping-form.component.css']
})
export class TrainerCourseMappingFormComponent implements OnInit {
  id:any;
  result:any;
  CourseList:any;


  EmailID:any;
  StartDate:any;
  EndDate:any;
  BatchName:any;
  AllowedStudents:any;

  constructor(public LearningService:LearningService, public ActivatedRoute:ActivatedRoute) { }
  trainerlist:any;
  ngOnInit(): void {
    this.GetTrainer();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetTrainer();
      }
    })

    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetAssessments();
      }
    })

    this.GetCourse();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetCourse();
      }
    })
  }

  

  GetAssessments() {
    this.LearningService.GetAssessments().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.EmailID=this.result[0].currencyName;
		this.StartDate=this.result[0].countryName;
    this.EndDate=this.result[0].description;
    this.BatchName=this.result[0].description;
    this.AllowedStudents=this.result[0].description;
      }
    ) 
  }

  

  Submit(){
    debugger 
   var json = {  
      "EmailID": this.EmailID,
      "StartDate": this.StartDate,
      "EndDate": this.EndDate,
      "BatchName": this.BatchName,
      "AllowedStudents": this.AllowedStudents
    };
    this.LearningService.InsertAssessments(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully Submitted...!")
      location.href="/#/CurrencyMaster"
      })
  }


  Update(){
    debugger
     var json = {
      "ID": this.id,
      "EmailID": this.EmailID,
      "StartDate": this.StartDate,
      "EndDate": this.EndDate,
      "BatchName": this.BatchName,
      "AllowedStudents": this.AllowedStudents          
      };
    
      this.LearningService.UpdateAssessments(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href="/#/CurrencyMaster";
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

  public GetTrainer() {
    debugger
    this.LearningService.GetTrainer().subscribe(
      data => {
        debugger
        this.trainerlist = data;
      })
  }

  cancel() {
    location.href = "/TrainerCourseMapping";
  }
}
