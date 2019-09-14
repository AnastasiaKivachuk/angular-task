import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";
import { OtherService } from "../../../shared/services/other.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public otherService: OtherService) { }

  ngOnInit() {
  }
  public dark = JSON.parse(localStorage.getItem('dark'));
}





