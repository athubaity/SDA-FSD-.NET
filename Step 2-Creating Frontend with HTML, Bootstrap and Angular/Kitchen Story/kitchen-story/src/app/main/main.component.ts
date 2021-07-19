import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/Users';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myuser: User;
  constructor(public auth: AuthService) { 
    this.myuser = auth.getMyUser();
  }

  ngOnInit(): void {
  }

}
