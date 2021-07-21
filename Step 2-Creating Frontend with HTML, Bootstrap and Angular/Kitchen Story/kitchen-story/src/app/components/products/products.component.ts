import { CartService } from './../../services/cart.service';
import { HeaderComponent } from './../header/header.component';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Products';
import { ProductService } from 'src/app/services/product.service';
import { Item } from 'src/app/model/Carts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products: Product[] = [];
  @Input() p: number=1;
  constructor(private cart : CartService) {
  }

 ngOnInit(): void {
 }
  
 addToCart(productx: any, quantityx: any){
   let mycart: Item[] = this.cart.getCart();
   let statusItem = true;
   let item: Item = {
    product: productx,
    quantity: parseInt(quantityx),
    subTotal: productx.price*parseInt(quantityx)
   };
   for(let i = 1, len = Object.keys(mycart).length+1; i < len; i++){
    if(mycart[i].product.id === item.product.id){
        console.log(quantityx);
        mycart[i].quantity = mycart[i].quantity + parseInt(quantityx);
      if(mycart[i].quantity <= mycart[i].product.quantity){
        mycart[i].subTotal = mycart[i].product.price*mycart[i].quantity;
        this.cart.addToCart(mycart);
        return true;
      }else if(mycart[i].quantity >= mycart[i].product.quantity){
        statusItem = false;
      }
    }
   }
    if(statusItem){
    let len = Object.keys(mycart).length + 1;
    mycart[len] = item;
    this.cart.addToCart(mycart);
    }
    return true;
 }
}