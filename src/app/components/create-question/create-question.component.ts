import { Component, OnInit, NgZone } from '@angular/core';
import { OtherService } from '../../shared/services/other.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Question } from '../../shared/services/question';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.sass']
})
export class CreateQuestionComponent implements OnInit {
  constructor(
    public otherService: OtherService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  public now = moment().format('L');
  public dark = JSON.parse(localStorage.getItem('dark'));
  public author = JSON.parse(localStorage.getItem('user')).email;

  ngOnInit() {}

  addQuestion(form: NgForm) {
    const newQuestion: Question = {
      title: form.value.title,
      text: form.value.text,
      author: this.author,
      HTML: form.value.HTML,
      CSS: form.value.CSS,
      JS: form.value.JS,
      date: new Date(),
      isApproved: false,
      isAnswered: false,
      comments: []
    };

    this.otherService.createQuestion(newQuestion);
  }

}

