import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from './shared/services/auth.service';
import {OtherService} from './shared/services/other.service';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { OpenQuestionComponent } from './components/open-question/open-question.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResolvedCommentPipe } from './shared/pipes/resolved-comment.pipe';
import { FiltersPipe } from './shared/pipes/filters.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    VerifyEmailComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    OpenQuestionComponent,
    UserProfileComponent,
    OrderByPipe,
    ResolvedCommentPipe,
    FiltersPipe
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, OtherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
