import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-managementstaffleaveview',
  templateUrl: './managementstaffleaveview.component.html',
  styleUrls: ['./managementstaffleaveview.component.css']
})
export class ManagementstaffleaveviewComponent implements OnInit {

  constructor() { }
  search: any
  ngOnInit(): void {
  }

  Substitute() {
    swal.fire('Updated Successfully');
  }

}
