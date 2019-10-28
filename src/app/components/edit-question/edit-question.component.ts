import { Component, OnInit, NgZone } from '@angular/core';
import { OtherService } from '../../shared/services/other.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Question } from '../../shared/services/question';
import { User } from '../../shared/services/user';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.sass']
})
export class EditQuestionComponent implements OnInit {
  id: string;
  question: Question;
  comments: Comment[];
  user: User;
  form: NgForm;
  dark: any = JSON.parse(localStorage.getItem('dark'));
  constructor(
    public otherService: OtherService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,

  ) { }

  ngOnInit() {
    const questionId = this.route.snapshot.paramMap.get('id');
    this.firestore.doc(`questions/${questionId}`).get().subscribe(data => {
      this.question = { ...data.data(), id: questionId } as Question;
    });
  }

  updateQuestion(form: NgForm) {
    const question: Question = {
      title: form.value.title,
      text: form.value.text,
      HTML: form.value.HTML,
      CSS: form.value.CSS,
      JS: form.value.JS,
      id: this.route.snapshot.paramMap.get('id')
    };
    this.otherService.updateQuestion(question);
    this.router.navigate([`/open-question/${question.id}`]);
  }
}
