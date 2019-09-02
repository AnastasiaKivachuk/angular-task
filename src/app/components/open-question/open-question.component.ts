import { Component, OnInit, NgZone } from '@angular/core';
import { OtherService } from "../../shared/services/other.service";
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {Question} from "../../shared/services/question";
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.sass']
})
export class OpenQuestionComponent implements OnInit {

  constructor(
    public otherService: OtherService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let questionId=this.route.snapshot.paramMap.get("id");
console.log(questionId);
  }

}
