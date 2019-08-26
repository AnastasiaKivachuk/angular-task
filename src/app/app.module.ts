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
import { FiltersComponent } from './components/dashboard/filters/filters.component';
import { ListOfQuestionsComponent } from './components/dashboard/list-of-questions/list-of-questions.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { HeaderQuestionComponent } from './components/create-question/header-question/header-question.component';
@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    VerifyEmailComponent,
    FiltersComponent,
    ListOfQuestionsComponent,
    CreateQuestionComponent,
    HeaderComponent,
    HeaderQuestionComponent
  ],
  imports: [
    // ReactiveFormsModule,
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
