import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  constructor(private LearningService: LearningService, private ActivatedRoute: ActivatedRoute) { }

  id:any;
  result:any;

  TrainerName:any;
  PhoneNumber:any;
  EmailID:any;
  Address:any;
  YearOfExperience:any;
  // Resume:any;
  Company_logo:any;
  SkillsAndTechnology:any;
  TrainerFeePerCourse:any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetTrainer();
      }
    })
  }

  GetTrainer() {
    this.LearningService.GetTrainer().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.TrainerName=this.result[0].name;
		this.PhoneNumber=this.result[0].phoneNo;
    this.EmailID=this.result[0].email;
    this.Address=this.result[0].address;
    this.YearOfExperience=this.result[0].yearOfExperience;
    this.Company_logo=this.result[0].resume;
    this.SkillsAndTechnology=this.result[0].skillAndTecchnology;
    this.TrainerFeePerCourse=this.result[0].trainerFee;
      }
    ) 
  }

  Submit(){
    debugger 
   var json = {  
      "Name": this.TrainerName,
      "PhoneNo": this.PhoneNumber,
      "Email": this.EmailID,
      "Address": this.Address,
      "YearOfExperience": this.YearOfExperience,
      "Resume":  this.Company_logo,
      "SkillAndTecchnology": this.SkillsAndTechnology,
      "TrainerFee": this.TrainerFeePerCourse
    };
    this.LearningService.InsertTrainer(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully Submitted...!")
      location.href="/#/Trainer"
      })
  }

  Update(){
    debugger
     var json = {
      "ID": this.id,
      "Name": this.TrainerName,
      "PhoneNo": this.PhoneNumber,
      "Email": this.EmailID,
      "Address": this.Address,
      "YearOfExperience": this.YearOfExperience,
      "Resume": this.Company_logo,
      "SkillAndTecchnology": this.SkillsAndTechnology,
      "TrainerFee": this.TrainerFeePerCourse        
      };
    
      this.LearningService.UpdateTrainer(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Successfully Updated...!");
        location.href="/#/Trainer";
      })
  }

  

  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }
  onRemove(event: any) {
    debugger
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  public uploadattachments() {
    debugger
    this.LearningService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

  Cancel() {
    location.href = "/#/Trainer";
  }
}
