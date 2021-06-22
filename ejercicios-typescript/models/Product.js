export class Product {
    constructor(title, description, price, sku) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.sku = sku;
    }
    increments(percentage) {
        this.price = this.price * percentage / 100;
    }
}
