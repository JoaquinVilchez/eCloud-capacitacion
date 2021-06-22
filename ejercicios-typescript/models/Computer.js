import { Product } from "./Product";
export class Computer extends Product {
    //Porque me muestra este error?
    constructor(product, memory, disk, model) {
        super(product.title, product.description, product.price, product.sku);
        this.memory = memory;
        this.disk = disk;
        this.model = model;
    }
}
