import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard.ts.guard";
import {CreateQuestionComponent} from './components/create-question/create-question.component';
import {EditQuestionComponent} from './components/edit-question/edit-question.component';
import {OpenQuestionComponent} from './components/open-question/open-question.component';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'create-new-question', component: CreateQuestionComponent },
  { path: 'edit-question', component: EditQuestionComponent },
  { path: 'open-question', component: OpenQuestionComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
