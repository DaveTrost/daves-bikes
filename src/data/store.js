import { bikes } from './bikes.js';
const products = 'daves-bikes-bike-catalog';
const cart = 'daves-bikes-shopping-cart';

export const store = {
    storage: window.localStorage,
    save(key, item) {
        this.storage.setItem(key, JSON.stringify(item));
    },
    get(key) {
        return JSON.parse(this.storage.getItem(key));
    },
    getProducts() {
        const storedBikes = this.get(products);
        if(!storedBikes) {
            this.save(products, bikes);
        }
        return this.get(products);
    },
    findElement(elements, code) {
        return elements.find((element) => element.code === code);
    },
    getProduct(code) {
        const storedBikes = this.getProducts();
        return this.findElement(storedBikes, code);
    },
    getShoppingCart() {
        const itemsInCart = this.get(cart);
        return (itemsInCart) ? itemsInCart : [];
    },
    getShoppingCartSize() {
        const itemsInCart = this.get(cart);
        if(itemsInCart) {
            return itemsInCart.reduce(accumulator, 0);
        }
        return 0;
    },
    orderProduct(code, quantity = 1) {
        let currentCart = this.getShoppingCart();
        const currentCartItem = this.findElement(currentCart, code);
        
        if(currentCartItem) {
            currentCartItem.quantity += quantity;
        } 
        else {
            currentCart.push({ 
                code: code, 
                quantity: quantity
            });
        }
        this.save(cart, currentCart);
    }
};

function accumulator(runningSum, element) {
    return runningSum + element.quantity;
}