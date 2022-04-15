import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffleaves',
  templateUrl: './staffleaves.component.html',
  styleUrls: ['./staffleaves.component.css']
})
export class StaffleavesComponent implements OnInit {

  constructor() { }
  roleid: any
  ngOnInit(): void {

    this.roleid = sessionStorage.getItem('roleid')
  }

}
