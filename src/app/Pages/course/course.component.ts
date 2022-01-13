import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 
  constructor(public LearningService:LearningService) { }

  ngOnInit(): void {
  }
  cancel() {
    location.href = "/CourseDashboard";
  }
  Course_Photo:any;

//   files: File[] = [];

// onSelect(event:any) {
//   console.log(event);
//   this.files.push(...event.addedFiles);
// }

// onRemove(event:any) {
//   console.log(event);
//   this.files.splice(this.files.indexOf(event), 1);
// }


files: File[] = [];
onSelect(event: { addedFiles: any; }) {
  debugger
  console.log(event);
  this.files.push(event.addedFiles[0]);
  this.uploadattachments();
  console.log("content", this.files);
}


onRemove(event:any)
{
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
}

public uploadattachments() {
  debugger
  this.LearningService.AttachmentsUpload(this.files).subscribe(res => {
    debugger
    this.Course_Photo = res;
    alert("ATTACHMENT UPLOADED");
  })
}

}
