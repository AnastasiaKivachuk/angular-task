import { Injectable, NgZone } from '@angular/core';
import { Question } from "../services/question";
import { Comments } from "../services/question";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OtherService {
  comments: Comments[];
  id: string;
  constructor(private firestore: AngularFirestore,
    public router: Router,
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) { }


  createQuestion(question: Question) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("questions")
        .add(question).then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .then(res => {
          this.router.navigate(['dashboard']);
        }, err => reject(err));
    });

  }

  updateQuestion(question) {
    return this.firestore.collection("questions").doc(question.id).update({
      title: question.title,
      text: question.text,
      HTML: question.HTML,
      CSS: question.CSS,
      JS: question.JS
    })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }


  getQuestion() {
    return this.firestore.collection("questions").snapshotChanges();
  }



  deleteQuestion(question) {
    this.firestore.collection("questions").doc(question.payload.doc.id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }


  deleteQuestion2(question) {
    this.firestore.collection("questions").doc(question.id).delete().then(function () {
      console.log("Document successfully deleted!");

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  GoToHome() {
    this.router.navigate(['dashboard']);
  }


  approveQuestion(question) {
    return this.firestore.collection("questions").doc(question.id).update({
      isApproved: true,
    })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }
  approveQuestion2(question) {
    return this.firestore.collection("questions").doc(question.payload.doc.id).update({
      isApproved: true,
    })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }
  addCommentToQuestion(comments: Comments[], id: string) {
    return this.firestore.collection("questions").doc(id).update({
      comments
    })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }

  updateIsAnswered(isAnswered: boolean, id: string) {
    return this.firestore.collection('questions').doc(id).update({
      isAnswered: isAnswered
    }).then(function () {
      console.log("Document successfully updated!");
    })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }

  updateCommentsInDatabase(comments: Comment[], id: string) {
    return this.firestore.collection('questions').doc(id).update({
      comments
    }).then(function () {
      console.log("Document successfully updated!");
    })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }

}
