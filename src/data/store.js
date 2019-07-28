import { bikes } from './bikes.js';
// import { generateCartItem } from '../generate-cart-item';
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
        let accumulator = 0;
        if(itemsInCart) {
            itemsInCart.forEach(element => accumulator += element.quantity);
        }
        return accumulator;
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
