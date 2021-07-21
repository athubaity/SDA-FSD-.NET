import { CartService } from './../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/Users';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myuser: User;
  statusCart= false;
  constructor(public auth: AuthService, private mycart: CartService) { 
    this.myuser = auth.getMyUser();
    this.statusCart = mycart.openCart();
    console.log(this.statusCart);
  }

  ngOnInit(): void {
  }

  changeStatusC(newS: boolean){
    this.statusCart = newS;
  }
}
