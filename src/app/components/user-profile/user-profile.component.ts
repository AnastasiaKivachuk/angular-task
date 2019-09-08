import { Component, OnInit, NgZone  } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { OtherService } from "../../shared/services/other.service";
import { Question } from '../../shared/services/question';  // Student data type interface class
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  constructor(    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public otherService: OtherService) { }

  ngOnInit() {
  }

}
