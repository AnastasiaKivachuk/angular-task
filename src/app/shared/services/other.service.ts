import { Injectable, NgZone } from '@angular/core';
import { Question } from "../services/question";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {database} from "firebase/app";
import { FormControl, FormGroup } from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OtherService {
  constructor(private firestore: AngularFirestore,
    public router: Router,  // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private route: ActivatedRoute
    ) {}



  //Firestore CRUD actions example
  createQuestion(question: Question) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("questions")
        .add(question).then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
        .then(res => {this.router.navigate(['dashboard']);
          }, err => reject(err));
    });

  }

  // updateQuestion(question: Question) {
  //   return this.firestore
  //     .collection("questions")
  //     .doc(question.payload.doc.id)
  //     .set({ completed: true }, { merge: true });
  // }


  getQuestion() {
    return this.firestore.collection("questions").snapshotChanges();


  }

  // getQuestionId(questionId:number){
  //  this.questionId = this.route.params.pipe(take(1)).subscribe(params => {
  //     this.id = params.id;
  //     this.firestore.doc(`dashboard/${this.id}`).get().subscribe(data => {
  //       this.question = {...data.data(), id: this.id} as Question;
  //     });
  // }

  // deleteQuestion(question: Question) {
  //   return this.firestore
  //     .collection("questions")
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }


  GoToHome(){
      this.router.navigate(['dashboard']);
    }

    openQuestion(){
      this.router.navigate(['open-question']);
    }




}
