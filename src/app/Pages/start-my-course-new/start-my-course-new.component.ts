import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'


@Component({
  selector: 'app-start-my-course-new',
  templateUrl: './start-my-course-new.component.html',
  styleUrls: ['./start-my-course-new.component.css']
})
export class StartMyCourseNewComponent implements OnInit {
  [x: string]: any;

  constructor(private LearningService: LearningService, private ActivatedRoute: ActivatedRoute,private sanitizer: DomSanitizer) { }

  courseid: any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.courseid = params['id'];
      this.GetChapter();
    }
    )
    this.show = 1;
  }


  coursedetails: any;
  chapterdetails: any;
  coursename: any;
  chaptername: any;
  chapterdescription: any;
  chapterphoto: any;
  show: any;
  public GetChapter() {
    debugger
    this.LearningService.GetChapterListByEmployeeID(sessionStorage.getItem('userid')).subscribe(data => {
      debugger
      this.coursedetails = data.filter(x => x.courseID == this.courseid);
      // this.chapterdetails = data.filter(x=>x.ID==this.ID && x.courseID==this.courseid);
      this.chapterdetails = data.filter(x => x.courseID == this.courseid);
      debugger
      this.coursename = this.coursedetails[0].courseName
      this.chaptername = this.coursedetails[0].name
      this.chapterdescription = this.coursedetails[0].chapterText
      this.chapterphoto = this.coursedetails[0].chapterPhoto
      this.ShowAttachments(this.coursedetails[0].id)
      this.show = 1
    })
  }
  getcoursedetails(details: any) {
    this.coursename = details.courseName
    this.chaptername = details.name
    this.chapterdescription = details.chapterText
    this.chapterphoto = details.chapterPhoto
    this.ShowAttachments(details.id)
    this.show = 1
  }

  showcard: any;
  clickcard() {
    this.showcard = 1;
  }

  Attachmentlist: any;
  dummAttachmentlist: any;
  showvideo: any;
  showimage: any;
  showPdf: any;
  showDocument: any;
  showPpt: any;



  ShowAttachments(id: any) {
    debugger
    this.showvideo = 0;
    this.showimage = 0;
    this.showPdf = 0;
    this.showDocument = 0;
    this.showPpt = 0;

    this.LearningService.GetChapterAttachmentByChapterID(id).subscribe(data => {
      debugger
      this.Attachmentlist = data;
      this.dummAttachmentlist = data;
      if (this.dummAttachmentlist.length != 0) {
        var list = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'video')
        var list1 = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Pdf')
        var list2 = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Image')
        var list3 = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Document')
        var list4 = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Ppt')
        if (list.length != 0) {
          this.showvideo = 1
        }
        if (list1.length != 0) {
          this.showPdf = 1
        }
        if (list2.length != 0) {
          this.showimage = 1
        }
        if (list3.length != 0) {
          this.showDocument = 1
        }
        if (list4.length != 0) {
          this.showPpt = 1
        }
      }
    })
  }



  noattachments: any;

  public PreviewVideo(photo: any) {
    debugger
    this.show = 2;
    this.chapterphoto = photo;
    
    //    if (this.Attachmentlist.length != 0) {
    //   this.Attachmentlist = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'video')
    //   if (this.Attachmentlist.length != 0) {
    //     // this.show = 2

    //   }
    //   else {
    //     this.noattachments = "No Videos Found"
    //     this.show = 5
    //   }

    // }
    // else {
    //   this.noattachments = "No Videos Found"
    //   this.show = 5
    // }

  }



  public PreviewPdf(photo: any) {
    this.show = 3
    this.chapterphoto=this.sanitizer.bypassSecurityTrustResourceUrl(photo);
    // window.open(photo, "_blank")
    // if (this.Attachmentlist.length != 0) {
    //   this.Attachmentlist = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Pdf')
    //   if (this.Attachmentlist.length != 0) {
    //     //  this.show=3
    //     window.open(this.Attachmentlist[0].photo, "_blank")
    //   }
    //   else {
    //     this.noattachments = "No Pdf Available"
    //     this.show = 5
    //   }

    // }
    // else {
    //   this.noattachments = "No Pdf Available"
    //   this.show = 5
    // }
  }
   domSanitizer: any;
  ppt:any
  public PreviewPPT(photo: any) {
    this.show = 4;
    this.chapterphoto="https://docs.google.com/gvie"+photo;
    // window.open(photo, "_blank")
  //  this.ppt=this.sanitizer.bypassSecurityTrustResourceUrl(photo);
    // window.open(photo, "_blank")
    // if (this.Attachmentlist.length != 0) {
    //   this.Attachmentlist = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Ppt')
    //   if (this.Attachmentlist.length != 0) {
    //     //  this.show=3
    //   }
    //   else {
    //     this.noattachments = "No Ppt Available"
    //     this.show = 5
    //   }

    // }
    // else {
    //   this.noattachments = "No Ppt Available"
    //   this.show = 5
    // }
  }



  public PreviewMSword(photo: any) {
     debugger
    this.show=5;
    this.chapterphoto=this.sanitizer.bypassSecurityTrustResourceUrl(photo);
    //  this.show=4;
    // this.chapterphoto=photo;
    // this.chapterphoto=this.sanitizer.bypassSecurityTrustResourceUrl(photo);
    // window.open(photo, "_blank")
    // if (this.Attachmentlist.length != 0) {
    //   this.Attachmentlist = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Document')
    //   if (this.Attachmentlist.length != 0) {
    //   }
    //   else {
    //     this.noattachments = "No Document Available"
    //     this.show = 5
    //   }

    // }
    // else {
    //   this.noattachments = "No Document Available"
    //   this.show = 5
    // }

  }

  public PreviewIMG(photo: any) {
    this.show = 1;
    this.chapterphoto = photo;
    // window.open(photo, "_blank")   
    // this.ActivatedRoute.
    // if (this.Attachmentlist.length != 0) {
    //   debugger
    //   this.Attachmentlist = this.dummAttachmentlist.filter((x: { attachmentType: string; }) => x.attachmentType == 'Image')
    //   if (this.Attachmentlist.length != 0) {
    //     this.show = 4
    //     debugger
    //   }
    //   else {
    //     this.noattachments = "No Image Available"
    //     this.show = 5
    //   }

    // }
    // else {
    //   this.noattachments = "No Image Available"
    //   this.show = 5
    // }
  }















}














