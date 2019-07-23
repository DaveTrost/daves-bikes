import { bikes } from './data/bikes.js';
import { generateBike } from './generate-bike.js';

const bikesList = document.getElementById('bikes');

for(let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const dom = generateBike(bike);
    bikesList.appendChild(dom);
}