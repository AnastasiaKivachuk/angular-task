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

  updateQuestion(question) {

//     this.firestore
//       .collection("questions")
//       .doc(question.id)
//       .update({
//         title: question.title,
//         text: question.text,
//         HTML: question.HTML,
//         CSS: question.CSS,
//         JS: question.JS});
// console.log(question.id);
console.log(question);
console.log(question.id);
return this.firestore.collection("questions").doc(question.id).update({
  title: question.title,
          text: question.text,
          HTML: question.HTML,
          CSS: question.CSS,
          JS: question.JS
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    console.error("Error updating document: ", error);
});
  }


  getQuestion() {
    return this.firestore.collection("questions").snapshotChanges();


  }



    deleteQuestion(question) {
    this.firestore.collection("questions").doc(question.payload.doc.id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
      }


      deleteQuestion2(question) {
        this.firestore.collection("questions").doc(question.id).delete().then(function() {
          console.log("Document successfully deleted!");

      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
          }



  GoToHome(){
      this.router.navigate(['dashboard']);
    }




}
