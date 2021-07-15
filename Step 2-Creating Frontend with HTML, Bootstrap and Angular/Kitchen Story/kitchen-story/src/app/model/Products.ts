export class Product{
    constructor(
        public id: number,
        public image: string,
        public name: string,
        public category: string,
        public quantity: number,
        public price: number){
            this.id=id;
            this.image=image;
            this.name=name;
            this.category=category;
            this.quantity=quantity;
            this.price=price;
        }
}