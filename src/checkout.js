export function findProduct(bikes, code) {
    return bikes.find((element) => element.code === code);
}

export function getLineTotal(quantity, price) {
    return parseFloat((quantity * price).toFixed(2));
}

export function getOrderTotal(bikes, cart) {
    let accumulator = 0;
    for(let i = 0; i < cart.length; i++) {
        const price = findProduct(bikes, cart[i].code).price;
        accumulator += getLineTotal(cart[i].quantity, price);
    }
    return (accumulator);
}

