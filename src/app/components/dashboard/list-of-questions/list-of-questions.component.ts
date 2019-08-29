import { Component, OnInit } from '@angular/core';
import { OtherService } from "../../../shared/services/other.service";

@Component({
  selector: 'app-list-of-questions',
  templateUrl: './list-of-questions.component.html',
  styleUrls: ['./list-of-questions.component.sass']
})
export class ListOfQuestionsComponent implements OnInit {

  constructor(public otherService: OtherService) { }

  ngOnInit() {
    this.getQuestion();
  }


  allQuestions;
  getQuestion = () =>{
     this.otherService
     .getQuestion()
     .subscribe(res =>(this.allQuestions = res));
  }


}
