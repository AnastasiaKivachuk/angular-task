import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { OtherService } from '../../shared/services/other.service';
import { Question } from '../../shared/services/question';
import { User } from '../../shared/services/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  id: string;
  question: Question;
  user: User;
  isAdmin: boolean;
  allQuestions: any;
  sortDirection = 'new';
  typeFilter: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public otherService: OtherService,
    private firestore: AngularFirestore
  ) { }

  public string = JSON.parse(localStorage.getItem('string'));
  public dark = JSON.parse(localStorage.getItem('dark'));

  ngOnInit() {
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    this.getQuestion();
    this.firestore.doc(`users/${uid}`).get().subscribe(data => {
      this.user = { ...data.data(), uid } as User;
      this.isAdmin = this.user.isAdmin;
    });
  }

  orderBy(state: string) {
    this.sortDirection = state;
  }

  filterBy(state: string) {
    this.typeFilter = state;
  }

  getQuestion = () => {
    this.otherService
      .getQuestion()
      .subscribe(res => (this.allQuestions = res));
  }

  deleteQuestion(question: any) {
    this.otherService.deleteQuestion(question);
  }

  approveQuestion2(question: any) {
    this.otherService.approveQuestion2(question);
  }

  makeStringPosition() {
    localStorage.setItem('string', JSON.stringify(true));
    this.string = JSON.parse(localStorage.getItem('string'));
  }

  makeBlockPosition() {
    localStorage.setItem('string', JSON.stringify(false));
    this.string = JSON.parse(localStorage.getItem('string'));
  }

  makeLightTheme() {
    localStorage.setItem('dark', JSON.stringify(false));
    this.dark = JSON.parse(localStorage.getItem('dark'));
  }

  makeDarkTheme() {
    localStorage.setItem('dark', JSON.stringify(true));
    this.dark = JSON.parse(localStorage.getItem('dark'));
  }
}


