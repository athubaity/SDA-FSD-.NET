import { HeaderComponent } from './../header/header.component';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products: Product[] = [];
  @Input() p: number=1;
  constructor() {
  }

 ngOnInit(): void {
 }
  
}