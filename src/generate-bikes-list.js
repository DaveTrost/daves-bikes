import { store } from './data/store.js';
import { generateBike } from './generate-bike.js';

const bikes = store.getProducts();

const bikesList = document.getElementById('bikes');
const cartCount = document.getElementById('cart-count');

for(let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const dom = generateBike(bike);
    bikesList.appendChild(dom);
}

cartCount.textContent = store.getShoppingCartSize();
