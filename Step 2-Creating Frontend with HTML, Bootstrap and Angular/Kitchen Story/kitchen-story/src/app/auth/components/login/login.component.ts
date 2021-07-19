import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  users: User[] = [];

  constructor(public auth: AuthService,public router: Router) {
   }

  ngOnInit(): void {
    this.auth.getUsers().subscribe((response)=> {
      this.users = response;
    })
  }

  Login(email: any, password: any){
    this.auth.Login(email,password);
    if (this.auth.isLoggedin()) {
      this.router.navigate(['../']);
    }
  }

}
