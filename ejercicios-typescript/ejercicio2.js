"use strict";
// 2. Crear una función que reciba un conjunto de números (los que el usuario elija) y devuelva la suma de estos números
console.log('::::::::Ejercicio 2::::::::');
console.log('Nombre funcion: sumNumbers(a,b,c,...,n)');
function sumNumbers(numbers) {
    var sum = 0;
    numbers.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
}
var numbers = [1, 5, 7, 2, 4];
console.log("   Suma de " + numbers + " = ", sumNumbers(numbers));