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
    static applyDiscount(products,discount){
        products.forEach(product=>{
            product.price=+(product.price - (product.price*discount)).toFixed(2);
        });
    }
}

const product1= new ProductProperties("apple", 2.50, 50);
console.log(product1.getTotalValue());
console.log(product1.toString());

//Part 2: adding inheritance
class PerishableProductProperties extends ProductProperties{
    constructor(name,price,quantity,expirationDate){
        super(name,price,quantity);
        this.expirationDate =expirationDate;
    }

    toString(){
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}

// two instances of class PerishableProductProperties
const product2= new PerishableProductProperties("milk", 1.50, 10, "2026-11-01");
console.log(product2.getTotalValue());
console.log(product2.toString());

const product3= new PerishableProductProperties("cheese", 5.50, 50, "2026-12-11");
console.log(product3.getTotalValue());
console.log(product3.toString());

//Part 3: Static methods and properties above in class ProductProperties

//Part 4: Store management
class Store{
    constructor(){
        this.inventory=[];
    }
    addProduct(product){
        this.inventory.push(product);
    }
    getInventoryValue(){
        let total=0;
        for (const product of this.inventory){
            total+= product.getTotalValue();
        }
        return total;
    }
    findProductByName(name){
        for(const product of this.inventory){
            if (product.name===name){
                return product;
            }
        }
        return null;
    }
}

//Part 5: Testing the system
const inventory = [
    new ProductProperties("tv", 300.00, 20),
    new ProductProperties("computer", 1000.00, 10),
    new PerishableProductProperties("mango",2.00,100, "2026-04-01"),
    new PerishableProductProperties("yogurt",4.00,50, "2026-05-01"),
    new PerishableProductProperties("watermelon",10.00,50, "2026-05-11"),
];

const store= new Store();

//adding products from inventory to store
inventory.forEach(product=>store.addProduct(product));


//total value before discount is added to inventory
console.log("here is the total transaction value before the discount is applied:$ ",
store.getInventoryValue().toFixed(2));

//add the 15% discount 
console.log(ProductProperties.applyDiscount(store.inventory, 0.15));

//total value after the discount is added
console.log("here is the total value after the 15% discount is applied: $", store.getInventoryValue().toFixed(2));

