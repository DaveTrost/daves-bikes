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
    for(let i = 0; i < cart.length; i++) {
        const price = findProduct(bikes, cart[i].code).price;
        accumulator += getLineTotal(cart[i].quantity, price);
    }

    const discount = getDiscount(promos, promoCode);
    if(discount) {
        accumulator *= (1 - discount);
    }

    return (accumulator);
}

