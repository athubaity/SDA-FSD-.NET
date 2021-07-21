import { Item } from 'src/app/model/Carts';
import { ProductService } from 'src/app/services/product.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  product: Product[]=[];
  status= false;
  constructor(private http:HttpClient, private prd: ProductService) {
    this.prd.getProduct().subscribe((response)=> {
      this.product = response;
    });
    // this.removeCart();
  }

  addToCart(item: Item[]){
    console.log(item);
    localStorage.setItem('mycart', JSON.stringify(item));
  }

  getCart(): Item[]{
    let data = JSON.parse(localStorage.getItem('mycart') || '{}');
    return data;
  }

  itemsNumber(){
    let mycart = this.getCart();
    console.log(Object.keys(mycart).length);
    return Object.keys(mycart).length;
  }

  removeCart(){
    localStorage.removeItem("mycart");
  }
  deleteFromCart(myCart: any){
    localStorage.removeItem('mycart');
    this.addToCart(myCart);
  }

  openCart(){
    return this.status;
  }

  statusCart(ststus: boolean){
    this.status = ststus;
  }
}
