import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/app/learning.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-support-ticket-dashboard',
  templateUrl: './support-ticket-dashboard.component.html',
  styleUrls: ['./support-ticket-dashboard.component.css']
})
export class SupportTicketDashboardComponent implements OnInit {

  constructor(public LearningService:LearningService, public ActivatedRoute:ActivatedRoute) { }
  ticketlist:any;
  search:any;
  count:any;
  ngOnInit(): void {
    this.GetSupportTickets();
  }



  public GetSupportTickets(){
    debugger
    this.LearningService.GetSupportTickets().subscribe(
      data=>{
        this.ticketlist=data.filter(x=>x.applicationName=='Learning and Development');
        this.count=this.ticketlist.length;
      }
    )
  }


  attachmentlist:any;
  image(id:any){
    debugger
    this.LearningService.GetSupportAttachment().subscribe(
      data=>{
        debugger
       this.attachmentlist=data.filter(x=>x.ticketID==id);
      
      }
    )
    
  }

  public DeleteSupportTickets(ID: any) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.LearningService.DeleteSupportTickets(ID).subscribe(data => {
          debugger
          Swal.fire('Deleted Successfully')
          location.reload();
        })
      }
    })
  }

}
