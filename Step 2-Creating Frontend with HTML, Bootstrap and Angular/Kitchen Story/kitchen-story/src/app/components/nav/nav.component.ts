import { CartService } from './../../services/cart.service';
import { User } from 'src/app/model/Users';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/Carts';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  myuser: User;
  numberItems: number = 0;
  isLoggedin: boolean;
  cart: Item[] = [];

  @Input()
  statusCart!: boolean;
  @Output() statusCartChange = new EventEmitter<boolean>();

  constructor(public auth: AuthService, private mycart: CartService) { 
    this.myuser = auth.getMyUser();
    this.isLoggedin = this.auth.isLoggedin();
    this.numberItems = this.mycart.itemsNumber();
    this.statusLog();
    this.cart = mycart.getCart();
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
    this.mycart.removeCart();
  }

  getItemsNum(){
    return this.cart.length;
  }

  statCart(){
    this.mycart.statusCart(true);
    this.statusCartChange.emit(true);
  }
}
