import { Product } from "./Product";

export class Computer extends Product{
    memory:number;
    disk:string;
    model:string;

    //Porque me muestra este error?
    constructor(product:Product,memory:number,disk:string, model:string){
        super(product.title,product.description,product.price, product.sku);
        this.memory = memory;
        this.disk = disk;
        this.model = model;
    }
}
