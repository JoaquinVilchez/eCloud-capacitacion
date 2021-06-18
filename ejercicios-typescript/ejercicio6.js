"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 6. Crear una clase “Computer” que herede de “Product” y le agregue propiedades como “memory, disk, model”
console.log('::::::::Ejercicio 6::::::::');
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    //Porque me muestra este error?
    function Computer(memory, disk, model) {
        var _this = _super.call(this) || this;
        _this.memory = memory;
        _this.disk = disk;
        _this.model = model;
        return _this;
    }
    return Computer;
}(Product));
