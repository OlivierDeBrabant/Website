import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  addProject(){
    this._router.navigate(['dashboard/addProject'])
  }
  registreer(){
    this._router.navigate(['dashboard/registreer'])
  }
}
