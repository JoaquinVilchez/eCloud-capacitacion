import { Product } from "./Product";

export class Computer extends Product{
    memory:number;
    disk:string;
    model:string;

    //Porque me muestra este error?
    constructor(title:string,description:string,price:number,sku:number,memory:number,disk:string, model:string){
        super(title,description,price,sku);
        this.memory = memory;
        this.disk = disk;
        this.model = model;
    }
}
