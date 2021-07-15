import { HeaderComponent } from './../components/header/header.component';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products;
  constructor(private http:HttpClient) {

    this.products = this.getProduct();
   }

  url: string = "http://localhost:3000/Product";

  onPrdCreate(Prd: Product){
    console.log(this.products);
  }

  getProduct(){
    return this.http.get<Product[]>(this.url);
  }

  getPrd(){
    return this.products;
  }

}
