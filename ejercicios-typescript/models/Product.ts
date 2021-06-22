export class Product {
    title:string;
    description:string;
    price:number;
    sku:number; 

    constructor(title:string,description:string,price:number,sku:number){
        this.title = title;
        this.description = description;
        this.price = price;
        this.sku = sku;
    }

    increments(percentage:number){
            this.price = this.price*percentage/100  
    }
}
