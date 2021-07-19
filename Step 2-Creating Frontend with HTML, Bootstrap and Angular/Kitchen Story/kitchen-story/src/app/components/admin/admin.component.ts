import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/Products';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  UserName:string = "Enter UserName"

  productlist : Product[] = [];
  p: number = 1;
  name: any;
  product: Product = {
    id: 0,
    image: '',
    name: '',
    category : '',
    quantity: 0,
    price: 0
  }
  addPrd(){
    this.product.id++;
    console.log(this.product.id);
    this.onclick(this.product.id, this.product.image, this.product.name, this.product.category, this.product.quantity, this.product.price);
  }

  onclick(idx: any, imagex: any, namex: any, categoryx: any, quantityx: any, pricex: any){
    if(imagex.length&&namex.length&&categoryx.length&&quantityx&&pricex > 0){
      let product: Product;
      product = {id: idx, image: imagex,name: namex,category: categoryx, quantity: quantityx, price: pricex};
      this.productlist.push(product);
      this.service.setProduct(product);
    }
  }

  ondelete(deleteme: any){
    let product: Product;
    const removeIndex = this.productlist.findIndex( product => product.id === deleteme );
    this.productlist.splice(removeIndex, 1);
    this.service.deleteProduct(deleteme);
  }

  constructor(public service: ProductService) {
   }

  ngOnInit(): void {
    this.service.getProduct().subscribe((response)=> {
      this.productlist = response;
      this.product.id = this.productlist.length;
    })
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.productlist = this.productlist.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) ||
        res.category.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

}
