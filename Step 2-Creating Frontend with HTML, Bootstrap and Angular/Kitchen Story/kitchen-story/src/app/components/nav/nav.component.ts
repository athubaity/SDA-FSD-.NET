import { User } from 'src/app/model/Users';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  myuser: User;
  isLoggedin: boolean;
  constructor(public auth: AuthService) { 
    this.myuser = auth.getMyUser();
    this.isLoggedin = this.auth.isLoggedin();
    this.statusLog();
  }

  statusLog(){
    this.isLoggedin = this.auth.isLoggedin();
  }
  ngOnInit(): void {
  }

  logout(){
    console.log('logout');
    this.auth.Logout();
    this.statusLog();
  }

}
