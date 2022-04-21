import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentattedance',
  templateUrl: './studentattedance.component.html',
  styleUrls: ['./studentattedance.component.css']
})
export class StudentattedanceComponent implements OnInit {

  constructor() { }
  roleid: any
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid')
  }

}
