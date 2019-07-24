import { findProduct, getLineTotal } from './checkout-functions.js';
import { bikes } from './data/bikes.js';

export function generateCartItem(lineItem) {
    const bikeObject = findProduct(bikes, lineItem.code);

    const tr = document.createElement('tr');

    const tdImg = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute('class', 'thumbnail');
    img.setAttribute('src', bikeObject.image);
    img.setAttribute('alt', `image of ${bikeObject.name}`);
    tdImg.appendChild(img);
    tr.appendChild(tdImg);
    
    const tdItem = document.createElement('td');
    tdItem.textContent = bikeObject.name;
    tr.appendChild(tdItem);
    
    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = lineItem.quantity;
    tr.appendChild(tdQuantity);

    const tdPricePer = document.createElement('td');
    tdPricePer.textContent = '$' + bikeObject.price;
    tr.appendChild(tdPricePer);

    const tdPriceTotal = document.createElement('td');
    const bPriceTotal = document.createElement('b');
    bPriceTotal.textContent = '$' + getLineTotal(lineItem.quantity, bikeObject.price);
    tdPriceTotal.appendChild(bPriceTotal);
    tr.appendChild(tdPriceTotal);

    return tr;
}
