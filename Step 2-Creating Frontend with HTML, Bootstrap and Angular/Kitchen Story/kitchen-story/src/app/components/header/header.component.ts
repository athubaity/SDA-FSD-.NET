import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/Products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: ProductService) { 
  }

  ngOnInit(): void {
  }

}
