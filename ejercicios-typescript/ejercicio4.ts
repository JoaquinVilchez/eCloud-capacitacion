// 4. “Programita”: Armar un programa que permita buscar por sku un producto dentro de la lista anterior, 
//y en caso de que exista muestre (console.log), este producto o en caso de que no, un mensaje advirtiendo 

import { Product } from "./models/Product.js"

//que no existe (console.error).
console.log('::::::::Ejercicio 4::::::::')

var product1 = new Product('Hamburguesa', 'Completa', 1500, 6177)
var product2 = new Product('Pizza', 'Muzzarella', 3500, 1297)
var product3 = new Product('Coca Cola', '1.5L', 2000, 4711)
var product4 = new Product('Papas fritas', 'Sin sal', 1000, 1246)
var product5 = new Product('Milanesa', 'Napolitana', 1000, 1255)

let listOfProducts:Product[] = [
    product1,
    product2,
    product3,
    product4,   
    product5
]

var result:boolean = false;
do{
    var skuInput:number = parseInt(prompt('Buscar producto por SKU [Probar con: 4711, por ejemplo]'));
}while(isNaN(skuInput));

//ME DEVUELVE UN ERROR PERO ANDA BIEN

searchProduct(skuInput)

function searchProduct(sku?:number){
    listOfProducts.forEach(item => {
        if(item.sku===sku){
            result = true;
            console.log(item)
        }
    });

    if (!result) {
        console.error(`No hay ningun producto con el SKU ${sku}`)
    }
}