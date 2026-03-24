//Part 1: setting up classes

class ProductProperties{
    constructor(name, price, quantity){
        this.name = name;
        this.price=price;
        // quantity must be an integer, you can't have a decimal amount of a product, if 1.7 was entered by mistake, this would round down to 1 
        this.quantity=Math.floor(quantity);
    }
    getTotalValue(){
        // returns the total value of product in stock
        return this.price*this.quantity;
    }
    
    toString(){
        // returns string representation of the product
        // price must be rounded to two decimal places
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`

    }
}

