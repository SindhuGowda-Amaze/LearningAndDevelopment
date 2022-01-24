
import Swal from 'sweetalert2';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

//import Swal from 'sweetalert2';


@Component({
  selector: 'app-take-assessment',
  templateUrl: './take-assessment.component.html',
  styleUrls: ['./take-assessment.component.css']
})
export class TakeAssessmentComponent implements OnInit {

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
  constructor(private AmazeService: LearningService, private ActivatedRoute: ActivatedRoute, private elementRef: ElementRef) {
  }
  courseid:any;
  ngOnInit(): void {
    this.userid = sessionStorage.getItem('userid');
    this.marks = 0;
    this.show = 1;
    this.message = "";
    this.GetUsers();
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
       this.courseid = params['id'];

     }
     )
  }

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
  public startTestContainer() {
    debugger
    this.startTest = 1;
    this.AmazeService.GetAssessments().subscribe(data => {
      debugger
      this.questionList = data;
   
      this.questionList = this.questionList.filter((x: { chapterID: number; }) => x.chapterID == this.courseid)
      this.count = this.questionList.length;
    })
    //this.changeReloadBit();
    // var callDuration = this.elementRef.nativeElement.querySelector('#time');
    // this.startTimer(callDuration);
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
  public GetUsers() {
    debugger
   
   
  }
  // public submitAnswer(){}

  public submitAnswer() {
    debugger;
    for (var i = 0; i < this.questionList.length; i++) {
      if (this.questionList[i].correctAnswer == this.questionList[i].userAnswer) {
        this.marks = this.marks + 1;
      }
    }
    if (this.marks >= 20) {
      this.testResult = 'Pass'
    } else {
      this.testResult = 'Fail';
    }
    var Entityy = {
      'TestResult': this.testResult,
      'UserID': this.userid,
      'ObtainedMarks': this.marks
    }
    this.AmazeService.InsertTestResponse(Entityy).subscribe(data => {
      debugger
      this.testResponseID = data;
      for (var i = 0; i < this.questionList.length; i++) {
        var ett = {
          'QuestionID': this.questionList[i].id,
          'CorrectAnswer': this.questionList[i].correctAnswer,
          'UserAnswer': this.questionList[i].userAnswer,
          'TestResponseID': this.testResponseID,
          'ObtainedMarks': this.marks
        }
        this.AmazeService.InsertTestResponseDetails(ett).subscribe(data => {
        });
      }
      Swal.fire('You have submited test successfully...');
      this.show = 0;
      this.startTest = "";
    })
    location.href="/#/AssessmentResult";
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
