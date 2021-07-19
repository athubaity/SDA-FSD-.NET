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

  setProduct(newPrd: Product){
    console.log(this.products);
    return this.http.post<Product>(this.url, newPrd).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  deleteProduct(deleteme: any){
    console.log(deleteme);
    return this.http.delete<void>(`${this.url}/${deleteme}`).subscribe(
      data => {
        console.log('DELETE Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  getProduct(){
    return this.http.get<Product[]>(this.url);
  }


}
