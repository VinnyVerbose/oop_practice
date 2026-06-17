/*

Project 3 — Shopping Cart

This is small enough to finish in under an hour but introduces richer object relationships.

Product

Properties:

name
price
CartItem

Properties:

product
quantity

Methods:

increaseQuantity()
decreaseQuantity()
ShoppingCart

Properties:

items

Methods:

addProduct(product)
removeProduct(productName)
getTotal()
listItems()

The interesting part is this:

A CartItem contains a Product.

ShoppingCart
    ↓
 CartItem
    ↓
 Product

So you'll be working with objects that contain other objects:

cart.items[0].product.name

That's a very common real-world OOP pattern.

Some design questions you'll need to solve:

Question 1

If the user adds the same product twice:

cart.addProduct(book);
cart.addProduct(book);

Should the cart contain:

Book x1
Book x1

or

Book x2

?

Question 2

Should CartItem allow quantity to become negative?

If not, where should that rule live?

CartItem?
ShoppingCart?
Both?
Question 3

Should getTotal() return:

19.999999999

or

20.00

?

Where should formatting happen?

This project introduces a concept called composition, which is one of the most important OOP ideas after encapsulation.

And unlike another Todo or Quiz app, it gives you a completely different domain to think through.

*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class CartItem{
    constructor(product){
        this.quantity = 1;
        this.product = product;
    }

    incrementQuantity(){
        this.quantity++;
    }

    decrementQuantity(){
        this.quantity--;
        if(this.quantity <= 0){
            this.quantity = 0;
        }
    }
}

class ShoppingCart{
    constructor(){
        this.items = [];
    }

    addItem(product){
        let potentialItem = this.items.find(cartItem => {
            return product.name === cartItem.product.name;
        })

        if(!potentialItem){
            this.items.push(new CartItem(product));
            return;
        }

        potentialItem.incrementQuantity();
    }

    removeItem(productName){
        this.items = this.items.filter(cartItem => cartItem.product.name !== productName);
    }

    getTotal(){
        let total = this.items.reduce((sum, item) => {
            return sum += (item.product.price * item.quantity);
        }, 0);

        return +total.toFixed(2);
    }

    listItems(){
        return [...this.items];
    }
}

const cart = new ShoppingCart();

const book = new Product('book', 20.24);
const mug = new Product('mug', 8.03);

cart.addItem(book);
cart.addItem(mug);

// For testing purposes only
window.cart = cart;