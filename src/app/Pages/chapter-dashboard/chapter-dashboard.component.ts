import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chapter-dashboard',
  templateUrl: './chapter-dashboard.component.html',
  styleUrls: ['./chapter-dashboard.component.css']
})
export class ChapterDashboardComponent implements OnInit {
  coursedetails: any;
  search: any;

  constructor(private LearningService: LearningService) { }
  courselist: any;

  ngOnInit(): void {
    this.GetChapter();
    this.GetCourse();
  }

  public GetCourse() {
    debugger
    this.LearningService.GetCourse().subscribe(
      data => {
        debugger
        this.courselist = data;
      })
  }

  dummcoursedetails: any;
  id: any;
  courseName: any;
  name: any;
  description: any;
  chapterPhoto: any;
  chapterText: any;

  public GetChapter() {
    debugger
    this.LearningService.GetChapter().subscribe(data => {
      debugger
      this.coursedetails = data;
      this.dummcoursedetails = data;
      debugger
    })
  }

    // public GetChapter(){
    // this.LearningService.GetChapter().subscribe(
    //   data => {
    //   this.coursedetails = data;
    //   this.dummcoursedetails = data;
    //   debugger
    //   this.coursedetails=this.coursedetails.filter((x: { id: any; })=>x.id==Number(this.id));
    //   this.courseName=this.coursedetails[0].courseName;
    //   this.name=this.coursedetails[0].name;
    //   this.description=this.coursedetails[0].description;
    //   this.chapterPhoto=this.coursedetails[0].chapterPhoto;
    //   this.chapterText=this.coursedetails[0].chapterText;
  
    //     }
    //   ) 
    // }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public PreviewVideo() {
    window.open('assets/Images/Java_Course.mp4')
  }

  public PreviewPPT() {
    window.open('assets/Images/JAVA_PPT.ppt')
  }

  edit(id: any) {
    debugger
    location.href = "/#/Chapter/" + id;
  }


  public Ondelete(id: any) {
    this.LearningService.DeleteChapter(id).subscribe(
      data => {
        debugger
        this.GetChapter();
        swal.fire('Sucessfully Deleted');
      }
    )

  }


  






  Attachmentlist: any;

  ShowAttachments(id: any) {
    debugger
    this.LearningService.GetChapterAttachmentByChapterID(id).subscribe(data => {
      debugger
      this.Attachmentlist = data;
    })
  }

  openAttchments(photo: any) {
    window.open(photo, "_blank")
  }
  courseid: any;

  getcourseid(even: any) {
    this.courseid = even.target.value;
    if (even.target.value != 0) {
      this.coursedetails = this.dummcoursedetails.filter((x: { courseID: any; }) => x.courseID == this.courseid)
    }
    else{
      this.GetChapter();
    }
  }
}
