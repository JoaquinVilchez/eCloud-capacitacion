import { Product } from "./Product";
export class Computer extends Product {
    //Porque me muestra este error?
    constructor(title, description, price, sku, memory, disk, model) {
        super(title, description, price, sku);
        this.memory = memory;
        this.disk = disk;
        this.model = model;
    }
}
