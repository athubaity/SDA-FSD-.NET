import { CartService } from './../../services/cart.service';
import { Item } from './../../model/Carts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  
  p: number = 1;
  mcart: Item[]=[];
  mycart: Item[]=[];
  total=0;
  constructor(private cart: CartService) {
    this.mcart = cart.getCart();
    this.convertToArray();
    this.Total();
    this.finishCart();
   }

  ngOnInit(): void {
  }

  convertToArray(){
    for(let i = 1, len = Object.keys(this.mcart).length+1; i < len; i++){
      this.mycart.push(this.mcart[i]);
    }

  }

  Total(){
    for(let i = 0, len = this.mycart.length; i < len; i++){
      this.total += this.mycart[i].subTotal;
    }
  }

  finishCart(){
    this.cart.removeCart();
  }
}
