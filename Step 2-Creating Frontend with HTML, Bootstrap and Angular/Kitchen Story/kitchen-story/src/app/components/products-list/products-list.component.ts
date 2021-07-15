import { HeaderComponent } from './../header/header.component';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  name: any;
  p: number = 1;
  constructor(public service: ProductService) {
  }
  ngOnInit(): void {
    this.service.getProduct().subscribe((response)=> {
      this.products = response;
    })
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.products = this.products.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) ||
        res.category.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

}
