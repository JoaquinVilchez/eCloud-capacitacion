import { Computer } from "./models/Computer.js"
import { Product } from "./models/Product.js"

// 6. Crear una clase “Computer” que herede de “Product” y le agregue propiedades como “memory, disk, model”
console.log('::::::::Ejercicio 6::::::::')

let product = new Product('Lenovo', '15 pulgadas', 100000, 7856)
let computer = new Computer(product, 16, '1TB', 'Thinkpad 3')