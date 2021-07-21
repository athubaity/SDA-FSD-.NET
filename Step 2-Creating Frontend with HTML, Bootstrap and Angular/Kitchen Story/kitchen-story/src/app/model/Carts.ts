import { Product } from "./Products";
export class Item{
    constructor(
        public product: Product,
        public quantity: number,
        public subTotal: number){
            this.product=product;
            this.quantity=quantity;
            this.subTotal=subTotal;
        }
}