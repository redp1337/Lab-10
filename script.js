//Part 1: setting up classes

class ProductProperties{
    constructor(name, price, quantity){
        this.name = name;
        this.price=price;
        this.quantity=quantity;
    }
    getTotalValue(){
        // this returns the total value of product in stock
        return this.price*this.quantity;
    }
}