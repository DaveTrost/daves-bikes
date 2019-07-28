import { getOrderTotal, getDiscount } from './checkout-functions.js';
import { generateCartItem } from './generate-cart-item.js';
import { store } from './data/store.js';
import { promos } from './data/promos.js';

const bikes = store.getProducts();
const cart = store.getShoppingCart();

const tableBody = document.getElementById('cart-table');
cart.forEach(lineItem => {
    tableBody.appendChild(generateCartItem(lineItem));
});

const promoCodeButton = document.getElementById('promo-code-button');
const promoCodeField = document.getElementById('promo-code-field');
promoCodeButton.addEventListener('click', applyPromo);
// how to catch a keypress of the enter key is from https://stackoverflow.com/questions/14542062/eventlistener-enter-key
promoCodeField.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode;
    if(key === 13) { 
        applyPromo();
    }    
});    

const totalsTable = document.getElementById('totals-table');
totalsTable.innerHTML = buildTotalsHtml();

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', processOrder);


function applyPromo() {
    let promoCodeValue = promoCodeField.value;
    if(getDiscount(promos, promoCodeValue) === 0) {
        alert('That code is not currently valid. Please try again.');
        promoCodeField.value = '';
    }
    totalsTable.innerHTML = buildTotalsHtml();
}

function processOrder() {
    alert('Under Construction');
}

function buildTotalsHtml() {
    const promoCodeValue = promoCodeField.value;
    const discount = getDiscount(promos, promoCodeValue);
    const hiddenClass = (discount === 0) ? ' hidden' : '';
    
    let html = '';
    html += `<tr class="sub-total${hiddenClass}">`;
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Sub-Total:</td>';
    html += '<td>$' + getOrderTotal(bikes, cart) + '</td>';
    
    html += `<tr class="discount-total${hiddenClass}">`;
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Discount Applied:</td>';
    html += '<td>' + -discount * 100 + '%</td>';

    html += '<tr class="cart-items-total">';
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Cart Total:</td>';
    html += '<td>$' + getOrderTotal(bikes, cart, promoCodeValue) + '</td>';
    html += '</tr>';
    return html;
}
