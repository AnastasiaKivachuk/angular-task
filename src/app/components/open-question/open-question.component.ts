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

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.sass']
})
export class OpenQuestionComponent implements OnInit {
  id: string;
  // private subId: Subscription;
  question: Question;
  comments: Comment[];
  isLoading = true;
  // loadingSub: Subscription;
  user: User;
  visibility = false;
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
      });
}

deleteQuestion(question){
  this.otherService.deleteQuestion2(question);
  this.router.navigate(['dashboard']);
}




// updateQuestion(form: NgForm) {
//   const question: Question = {
//   comments: form.value.comments,

//   id: this.route.snapshot.paramMap.get("id")
//   };
//   console.log(question.id);
//   this.otherService.updateQuestion(question);
//   console.log(question);
//   this.router.navigate([`/open-question/${question.id}`]);
// }

approveQuestion(question) {
  this.otherService.approveQuestion(question);
  this.question.isApproved = true;
  this.router.navigate(['dashboard']);
}

addNewComment(form: NgForm) {
  const newComment: Comments = {
    textComment: form.value.comments,
    author: JSON.parse(localStorage.getItem('user')).email,
    date: new Date(),
    isResolved: false
  };
  this.question.comments.push(newComment);
  // const comments = this.question.comments;
  // const id=this.route.snapshot.paramMap.get("id");

  this.otherService.addCommentToQuestion(this.question.comments, this.route.snapshot.paramMap.get("id"));
  this.router.navigate(['dashboard']);
}
}
