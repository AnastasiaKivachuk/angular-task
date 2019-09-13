import { Component, OnInit, NgZone } from '@angular/core';
import { OtherService } from "../../shared/services/other.service";
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {Question} from "../../shared/services/question";
import {Comments} from "../../shared/services/question";
import {User} from "../../shared/services/user";
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as moment from 'moment';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.sass']
})
export class OpenQuestionComponent implements OnInit {
  id: string;
  question: Question;
  comments;
  isLoading = true;
  user: User;
  visibility = false;
  isAdmin;
  normalDate;
  constructor(
    public otherService: OtherService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    let questionId=this.route.snapshot.paramMap.get("id");

    this.firestore.doc(`questions/${questionId}`).get().subscribe(data => {
          this.question = {...data.data(), id: questionId} as Question;
          this.comments = this.question.comments;
      });


      let uid=JSON.parse(localStorage.getItem('user')).uid;
      this.firestore.doc(`users/${uid}`).get().subscribe(data => {
        this.user = {...data.data(), uid: uid} as User;
        this.isAdmin=this.user.isAdmin;
    });
}

deleteQuestion(question){
  this.otherService.deleteQuestion2(question);
  this.router.navigate(['dashboard']);
}


approveQuestion(question) {
  this.otherService.approveQuestion(question);
  this.question.isApproved = true;
  this.router.navigate(['dashboard']);
}

addNewComment(form: NgForm) {
  const newComment: Comments = {
    textComment: form.value.comments,
    author: JSON.parse(localStorage.getItem('user')).photoURL,
    date: moment().format('L'),
    isResolved: false
  };
  this.question.comments.push(newComment);
  form.reset();
  this.otherService.addCommentToQuestion(this.question.comments, this.route.snapshot.paramMap.get("id"));
  this.router.navigate([`/open-question/${this.question.id}`]);

}
changeIsResolved(target, id: number) {
  let isAnswered = false;
    this.comments[id].isResolved = target.checked;
    this.otherService.updateCommentsInDatabase(this.comments, this.route.snapshot.paramMap.get("id"));
    this.comments.forEach(comment => {
      if (comment.isResolved) {
        isAnswered = true;
      }
    });
    this.otherService.updateIsAnswered(isAnswered, this.route.snapshot.paramMap.get("id"));
}
}

