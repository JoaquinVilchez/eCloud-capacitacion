// 3. Crear una clase llamada Product (con sus datos: title, description, price, sku). Crear una instancia de esta clase. 

//Crear un arreglo de “productos” (5 productos).
console.log('::::::::Ejercicio 3::::::::')
class Product {
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
            this.price = this.price+(this.price*percentage/100)
    }
}

var product1 = new Product('Remera', 'Remera mangas cortas', 1500, 7824)
var product2 = new Product('Jean', 'Jean clasico', 3500, 9812)
var product3 = new Product('Buzo', 'Buzo Rojo', 2000, 5432)
var product4 = new Product('Bufanda', 'Bufanda de lana', 1000, 1829)
var product5 = new Product('Gorra', 'Gorra Adidas', 1000, 4278)

let products:Product[] = [
    product1,
    product2,
    product3,
    product4,
    product5
]

console.log('Productos: ', products);

