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

console.log(cart);
// ShoppingCart {items: Array(2)}items: Array(2)
// 0: CartItem {quantity: 1, product: Product}
// 1: CartItem {quantity: 1, product: Product}
