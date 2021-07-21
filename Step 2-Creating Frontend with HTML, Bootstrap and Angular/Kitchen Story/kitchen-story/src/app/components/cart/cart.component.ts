import { Item } from './../../model/Carts';
import { CartService } from './../../services/cart.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/Products';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  currentDate = new Date();
  shippingDate = new Date();
  mcart: Item[] = [];
  myCart: Item[] = [];
  total: number = 0;
  constructor(private cart: CartService) { 
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.shippingDate.setDate(this.shippingDate.getDate() + 7);
    this.mcart = this.cart.getCart();
    console.log(this.mcart);
    this.convertToArray();
    this.Total();
  }

  ngOnInit(): void {
  }

  convertToArray(){
    for(let i = 1, len = Object.keys(this.mcart).length+1; i < len; i++){
      this.myCart.push(this.mcart[i]);
    }
  }

  convertToObj(arr: any){
    let obj = arr.reduce(function(acc: { [x: string]: any; }, cur: any, i: number) {
      acc[++i] = cur;
      return acc;
    }, {});
    return obj;
  }
  removeItem(deleteme: number){
    const removeIndex = this.myCart.findIndex( item => item.product.id === deleteme );
    this.myCart.splice(removeIndex, 1);
    let myCart2 = this.convertToObj(this.myCart);
    this.cart.deleteFromCart(myCart2);
  }

  Total(){
    for(let i = 0, len = this.myCart.length; i < len; i++){
      this.total += this.myCart[i].subTotal;
    }
  }
}
