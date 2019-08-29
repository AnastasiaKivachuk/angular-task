import { Component, OnInit, NgZone } from '@angular/core';
import { OtherService } from "../../shared/services/other.service";
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import {Question} from "../../shared/services/question";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.sass']
})
export class EditQuestionComponent implements OnInit {

  constructor(
    public otherService: OtherService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
  }

}
