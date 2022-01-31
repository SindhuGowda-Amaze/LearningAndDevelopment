
import Swal from 'sweetalert2';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
//import Swal from 'sweetalert2';


@Component({
  selector: 'app-take-assessment',
  templateUrl: './take-assessment.component.html',
  styleUrls: ['./take-assessment.component.css']
})
export class TakeAssessmentComponent implements OnInit {
  public Editor = ClassicEditor;
  url: any;
  userid: any;
  categoryid: any;
  userList: any[]=[];
  testResult: any;
  categoryList: any;
  questionList: any;
  // public Editor = ClassicEditor;
  userAnswer: any;
  marks: any;
  show: any;
  //private future: Date;
  // private futureString: string;
  // private diff: number;
  private message: any;
  endtime: any
  localTime: any;
  // loaclDate: Date;
  // currentTime: string;
  // lastTime: string;
  reloadBit: any;
  startTest: any;
  // interval;
  testResponseID: any;
  PhoneNumber: any;
  invalidphone: any;
  Email: any;
  email: any;
  emailID: any;
  constructor(private AmazeService: LearningService, private ActivatedRoute: ActivatedRoute, private elementRef: ElementRef,public router:Router) {
  }
  courseid:any;
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.marks = 0;
    this.show = 1;
    this.message = "";
   // this.GetUsers();
    this.startTest=0;
  //  this.future = new Date(this.futureString);
    // this.activatedroute.params.subscribe(params => {
    //   debugger;
    //   this.url = params['url'];
    //   if (this.url == undefined) {
    //   }
    //   else {
    //     debugger
    //     this.url = atob(this.url);
    //     this.url = this.url.split('-');
    //     this.userid = this.url[0];
    //     this.categoryid = this.url[1];
    //     debugger
    //   }
    // })

    
    this.ActivatedRoute.params.subscribe(params => {
      debugger
       this.courseid = params['courseid'];
       this.chapterid = params['chapterid'];

     }
     )
  }
  chapterid:any;
  public validateohone() {
    if (this.PhoneNumber.length < 10) {
      this.invalidphone = 0;
    }
    else {
      this.invalidphone = 1;
    }
  }

  // public submitDetails() {
  //   this.AmazeService.GetTestResponse().subscribe(
  //     data => {
  //       debugger
  //       let temp: any = data;
  //       let result = temp.filter(x => x.userID == this.userid);
  //       if (result.length == 0) {
          
  //       }
  //       else {
  //         Swal.fire('Sorry', 'You already took this Test');
  //       }
  //     })

  // }
  count:any;
  totalmarks:any;
  public startTestContainer() {
    debugger
    this.startTest = 1;
    this.AmazeService.GetAssessments().subscribe(data => {
      debugger
      this.questionList = data;
      this.totalmarks=0;
     let tempquetin = this.questionList.filter((x: { chapterID: any; courseID:any}) => x.chapterID == this.chapterid && x.courseID==this.courseid);
    this.questionList=this.shuffleArray(tempquetin);
      for (let i=0;i<this.questionList.length;i++){
        debugger
      
        this.totalmarks= this.totalmarks + this.questionList[i].weightage;
      }
      this.count = this.questionList.length;
    })
    //this.changeReloadBit();
    // var callDuration = this.elementRef.nativeElement.querySelector('#time');
    // this.startTimer(callDuration);
  }

  public  shuffleArray(array:any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
  // startTimer(display) {
  //   var timer = 1800;
  //   var minutes;
  //   var seconds;

  //   Observable.interval(1000).subscribe(x => {
  //     minutes = Math.floor(timer / 60);
  //     seconds = Math.floor(timer % 60);

  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;

  //     display.textContent = minutes + ":" + seconds;

  //     --timer;
  //     if (timer < 0) {
  //       console.log('timer is ended');
  //     }
  //   })
  // }


  public changeReloadBit() {
    // this.AmazeService.GetUsers().subscribe(
    //   data => {
    //     debugger
    //     this.userList = data;
    //     this.userList = this.userList.filter(x => x.id == this.userid)
    //     this.reloadBit = this.userList[0].reloadBit;
    //     if (this.reloadBit == 0) {
    //       this.GetUsers();
    //       this.loaclDate = new Date();
    //       this.currentTime = (this.loaclDate.getHours() + 1) + ':' + (this.loaclDate.getMinutes() + 0);
    //       this.lastTime = "00:0";

    //       this.countdownTimeStart(this.currentTime);
    //       this.AmazeService.UpdateRelaodBit(this.userid).subscribe(
    //         data => {
    //           debugger
    //         }, error => {
    //         }
    //       )
    //     } else {
    //       Swal.fire('Sorry', 'Your test paper has been submitted..');
    //       this.submitAnswer();
    //     }
    //   }, error => {
    //   }
    // )
  }

  // public submitAnswer(){}
  correctansers:any;
  wrongansers:any
  public submitAnswer() {
    debugger;
    let notansred:any=0;
    for (var i = 0; i < this.questionList.length; i++) {
      if (this.questionList[i].userAnswer == '') {
        notansred=notansred+1
      }
    }

    if(notansred>0){
      Swal.fire('You have not Answered '+ notansred +' Questions')
    }
    else{
      this.correctansers=0;
      this.wrongansers=0;
      for (var i = 0; i < this.questionList.length; i++) {
        if(this.questionList[i].questionID==1){
          if (this.questionList[i].correctAnswer == this.questionList[i].userAnswer) {
            this.marks = this.marks +  this.questionList[i].weightage;
           this.correctansers= this.correctansers +1;
          }
          else{
            this.wrongansers= this.wrongansers + 1;
          }
        }
        else if(this.questionList[i].questionID==2){
          
        }
      
      }
      if (this.marks >= this.totalmarks/2) {
        this.testResult = 'Pass'
      } else {
        this.testResult = 'Fail';
      }
      var Entityy = {
        'TestResult': this.testResult,
        'UserID': this.userid,
        'ObtainedMarks': this.marks,
        'CourseID':this.courseid,
        'ChapterID':this.chapterid,
        'Totalmarks':this.totalmarks,
        'CorrectAnswers':this.correctansers,
        'wronganswers':this.wrongansers,
  
      }
      this.AmazeService.InsertTestResponse(Entityy).subscribe(data => {
        debugger
        this.testResponseID = data;
        if(this.testResponseID==10){
          Swal.fire('You Already took this Test');
          this.ngOnInit();
        }else{
          for (var i = 0; i < this.questionList.length; i++) {
            var ett = {
              'QuestionID': this.questionList[i].id,
              'CorrectAnswer': this.questionList[i].correctAnswer,
              'UserAnswer': this.questionList[i].userAnswer,
              'TestResponseID': this.testResponseID,
              'ObtainedMarks':  this.questionList[i].correctAnswer==this.questionList[i].userAnswer?this.questionList[i].weightage:0
            }
            this.AmazeService.InsertTestResponseDetails(ett).subscribe(data => {
            });
          }
          Swal.fire('You have submited test successfully...');
          this.show = 0;
          this.startTest = "";
        //  this.router.navigate(['/AssessmentResult', this.testResponseID]);
        this.router.navigate(['/MyCourseDashboard']);
        }
       
      })
    }

   
    //location.href="/#/AssessmentResult/";

  }

  // countdownTimeStart(endtime) {
  //   this.interval = setInterval(() => {
  //     var countDownDate = new Date("Sep 25, 2025 " + endtime).getTime();
  //     // Get todays date and time
  //     var now = new Date().getTime();
  //     // Find the distance between now an the count down date
  //     var distance = countDownDate - now;
  //     // Time calculations for days, hours, minutes and seconds
  //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     // Output the result in an element with id="demo"
  //     document.getElementById("demo").innerHTML = hours + "h "
  //       + minutes + "m " + seconds + "s ";
  //     if (hours == 0 && minutes == 0 && seconds == 0) {
  //       debugger
  //       this.submitAnswer();
  //       Swal.fire('Sorry', 'Time Out..');
  //     }
  //     // If the count down is over, write some text 
  //   }, 1000)
  // }

}

//   loader:any;
//   constructor(public LearningService: LearningService, public ActivatedRoute: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.GetAssessments() ;
//     this.loader=true;
//   }
//   submit(){
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "you want to submit your answers",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, submit it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           'Success',
//           'Your Answers is successfully Submitted.',
//           'success'
//         )
       
//       }
//     })
//     this.loader=false;
//     location.href="#/AssessmentResult"
//   }

//   cancel(){
//     location.href="#/StartMyCourse"
//   }

//   quetionlist:any;
//   count:any;
//   public GetAssessments() {
//     debugger
//     this.LearningService.GetAssessments().subscribe(
//       data => {
//         debugger
//         this.quetionlist = data;
        
//         // this.count = this.quetionlist.length;
//       })
//   }
// }
