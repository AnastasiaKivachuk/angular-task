import { Component, OnInit, NgZone  } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { OtherService } from "../../shared/services/other.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public otherService: OtherService
  ) { }

  ngOnInit() {this.getQuestion(); }


  openEdit(){
  this.otherService.openEdit();
}

allQuestions;
getQuestion = () =>{
   this.otherService
   .getQuestion()
   .subscribe(res =>(this.allQuestions = res));
}
}

