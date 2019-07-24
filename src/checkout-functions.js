import { promos } from './data/promos.js';

export function findProduct(bikes, code) {
    return bikes.find((element) => element.code === code);
}

export function getLineTotal(quantity, price) {
    return parseFloat((quantity * price).toFixed(2));
}

export function getDiscount(promos, code) {
    const promo = promos.find((element) => element.code === code);
    return (promo ? promo.discount : 0.0);
}

export function getOrderTotal(bikes, cart, promoCode = '') {
    let accumulator = 0;
 
    cart.forEach((element) => {
        const price = findProduct(bikes, element.code).price;
        accumulator += getLineTotal(element.quantity, price);
    });

    accumulator *= (1 - getDiscount(promos, promoCode));

    return (accumulator);
}

