import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  errorMessage = '';
  Password1: string = '';
  Password2: string = '';
  constructor(public auth: AuthService,public router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(){
    if(this.Password1 === this.Password2 && this.Password1 !== '' && this.Password2 !== ''){
      this.auth.resetPassword(this.Password1);
      this.errorMessage = '';
    }else{
      this.errorMessage = 'The Password are not identical! please try again.'
    }
  }
}
