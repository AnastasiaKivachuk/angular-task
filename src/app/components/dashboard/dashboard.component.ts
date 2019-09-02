import { Component, OnInit, NgZone  } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { OtherService } from "../../shared/services/other.service";
import { Question } from '../../shared/services/question';  // Student data type interface class
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


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

  ngOnInit() {this.getQuestion();
   }


//   openQuestion(){
//   this.otherService.openQuestion();
// // console.log(question.payload.doc.data().id);
// }

allQuestions;
getQuestion = () =>{
   this.otherService
   .getQuestion()
   .subscribe(res =>(this.allQuestions = res));
}

deleteQuestion(question){
  this.otherService.deleteQuestion(question);
}
}


