import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    // this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
    //   debugger
    //   this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    // })
  }
  cancel() {
    location.href = "/Trainer";
  }
}
