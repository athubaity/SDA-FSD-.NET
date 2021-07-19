import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetPasswordComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  providers: [],
  bootstrap: [LoginComponent,
    SignupComponent,
    ResetPasswordComponent]
})
export class AuthModule { }
