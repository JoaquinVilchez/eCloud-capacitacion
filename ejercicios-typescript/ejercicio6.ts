// 6. Crear una clase “Computer” que herede de “Product” y le agregue propiedades como “memory, disk, model”
console.log('::::::::Ejercicio 6::::::::')

class Computer extends Product{
    memory:number;
    disk:string;
    model:string;

    //Porque me muestra este error?
    constructor(memory:number,disk:string, model:string){
        super();
        this.memory = memory;
        this.disk = disk;
        this.model = model;
    }
}