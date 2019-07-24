import { getOrderTotal, getDiscount } from './checkout-functions.js';
import { generateCartItem } from './generate-cart-item.js';
import { bikes } from './data/bikes.js';
import { cart } from './data/order.js';
import { promos } from './data/promos.js';

let promoCode = 'save50';

document.getElementById('order-button').addEventListener('click', processOrder);

const tableBody = document.getElementById('cart-table');
cart.forEach(lineItem => {
    tableBody.appendChild(generateCartItem(lineItem));
});

const totalsTable = document.getElementById('totals-table');
totalsTable.innerHTML = buildTotalsHtml();

function processOrder() {
    alert('processing');
}

function buildTotalsHtml() {
    let html = '<tr class="sub-total">';
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Sub-Total:</td>';
    html += '<td>$' + getOrderTotal(bikes, cart) + '</td>';
    
    html += '<tr class="discount-total">';
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Discount Applied:</td>';
    html += '<td>' + -getDiscount(promos, promoCode) * 100 + '%</td>';

    html += '<tr class="cart-items-total">';
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Cart Total:</td>';
    html += '<td>$' + getOrderTotal(bikes, cart) + '</td>';
    html += '</tr>';
    return html;
}
