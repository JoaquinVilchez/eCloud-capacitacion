"use strict";
// 5. Recorrer el arreglo de productos y hacer un incremento del 10% del valor en el precio de cada producto.
console.log('::::::::Ejercicio 5::::::::');
var product1 = new Product('Teclado', 'Logitech', 1500, 1187);
var product2 = new Product('Mouse', 'Logitech', 1000, 5244);
var product3 = new Product('Monitor', 'DELL', 30000, 1258);
var product4 = new Product('Notebook', 'Lenovo ideapad 3', 100000, 2781);
var product5 = new Product('Auriculares', 'JBL', 4000, 6711);
let listOfProductsToIncrement = [
    product1,
    product2,
    product3,
    product4,
    product5
];
console.log("Precio actual de los productos: ");
listOfProductsToIncrement.forEach(product => {
    console.log(product.title, `$${product.price}`);
});
listOfProductsToIncrement.forEach(item => {
    item.increments(10);
});
// listOfProductsToIncrement.map(function(item:Product){
//     item.price = item.price+(item.price*0.1);
//     return item;
// })
console.log("Precio actualizados de los productos: ");
listOfProductsToIncrement.forEach(product => {
    console.log(product.title, `$${product.price}`);
});
