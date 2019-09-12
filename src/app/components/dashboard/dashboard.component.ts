import { Component, OnInit, NgZone  } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { OtherService } from "../../shared/services/other.service";
import { Question } from '../../shared/services/question';
import { User } from '../../shared/services/user';   // Student data type interface class
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  id: string;
  question: Question;
  user: User;
  isAdmin;
  allQuestions;
  sortDirection = 'new';
  typeFilter;
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public otherService: OtherService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {this.getQuestion();

    let uid=JSON.parse(localStorage.getItem('user')).uid;
    this.firestore.doc(`users/${uid}`).get().subscribe(data => {
      this.user = {...data.data(), uid: uid} as User;
      this.isAdmin=this.user.isAdmin;
      console.log(this.isAdmin);
  });
   }

   orderBy(state: string) {
    this.sortDirection = state;
  }

  filterBy(state: string) {
    this.typeFilter = state;
  }

getQuestion = () =>{
   this.otherService
   .getQuestion()
   .subscribe(res =>(this.allQuestions = res));
}


deleteQuestion(question){
  this.otherService.deleteQuestion(question);
}

approveQuestion2(question) {
  this.otherService.approveQuestion2(question);
}
}


