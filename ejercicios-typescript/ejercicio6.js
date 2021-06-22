"use strict";
// 6. Crear una clase “Computer” que herede de “Product” y le agregue propiedades como “memory, disk, model”
console.log('::::::::Ejercicio 6::::::::');
class Computer extends Product {
    //Porque me muestra este error?
    constructor(product, memory, disk, model) {
        super(product.title, product.description, product.price, product.sku);
        this.memory = memory;
        this.disk = disk;
        this.model = model;
    }
}
let product = new Product('Lenovo', '15 pulgadas', 100000, 7856);
let computer = new Computer(product, 16, '1TB', 'Thinkpad 3');
console.log(computer);
