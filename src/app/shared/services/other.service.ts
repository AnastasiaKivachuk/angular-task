import { Injectable, NgZone } from '@angular/core';
import { Question } from "../services/question";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {database} from "firebase/app";
import { FormControl, FormGroup } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class OtherService {
  constructor(private firestore: AngularFirestore,
    public router: Router,  // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    ) {}



  //Firestore CRUD actions example
  createQuestion(question: Question) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("questions")
        .add(question)
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

  // this.afAuth.authState.subscribe(question => {
  //   if (question) {
  //     this.questionData = question;
  //     localStorage.setItem('question', JSON.stringify(this.questionData));
  //     JSON.parse(localStorage.getItem('question'));
  //   } else {
  //     localStorage.setItem('question', null);
  //     JSON.parse(localStorage.getItem('question'));
  //   }
  // })

  getQuestion() {
    return this.firestore.collection("questions").snapshotChanges();
    // this.firestore.collection("questions").doc("SF").onSnapshot(function(doc) {
    //     console.log("Current data: ", doc.data());
    // });

    // console.log(doc.data());

  //   return this.firestore.collection("questions").get().then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //         console.log(doc.id, " => ", doc.data());
  //     });
  // });

  }

  // deleteQuestion(question: Question) {
  //   return this.firestore
  //     .collection("questions")
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }


  GoToHome(){
      this.router.navigate(['dashboard']);
    }

    openEdit(){
      this.router.navigate(['open-question']);
    }



//     this.store.collection(collection)
//     .doc(document).ref
//     .set(object, {
//         merge: true
//     })
//     .then(() => this.showSnackbar("Изменения сохранены"))
//     .catch((error) => {
//         console.log(error);
//         this.showSnackbar("Не удалось сохранить изменения");
//     });
// // замечу, что showSnackbar должен быть реализован как функциональный литерал
// showSnackbar = (message) => {
//     this.snackbar.open(message, null, {
//         duration: 1000
//     });
// };


}
