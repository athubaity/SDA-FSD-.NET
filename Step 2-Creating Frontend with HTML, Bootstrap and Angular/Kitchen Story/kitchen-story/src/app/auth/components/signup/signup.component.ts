import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: User[] = [];
  user: User = {
    id: 0,
    type: 2,
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: ''
  }
  constructor(public auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe((response)=> {
      this.users = response;
      this.user.id = this.users.length;
    })
  }

  createAccount(){
    this.user.id++;
    console.log(this.user.id);
    if(this.user.fname.length&&
      this.user.lname.length&&
      this.user.email.length&&
      this.user.password.length
      > 0){
      let user: User;
      user = {id: this.user.id, 
        type: this.user.type,
        fname: this.user.fname,
        lname: this.user.lname,
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone};
      this.users.push(user);
      this.auth.addUser(user);
      this.router.navigate(['../login']); 
    }
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
