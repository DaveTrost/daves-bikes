import { getOrderTotal } from './checkout-functions.js';
import { generateCartItem } from './generate-cart-item.js';
import { bikes } from './data/bikes.js';
import { cart } from './data/order.js';

document.getElementById('order-button').addEventListener('click', processOrder);

const tableBody = document.getElementById('cart-table');
cart.forEach(lineItem => {
    tableBody.appendChild(generateCartItem(lineItem));
});

const totalsTable = document.getElementById('totals-table');
const totalsRowHtml = () => {
    let html = '<tr class="cart-items-total">';
    html += '<td colspan="2"></td>';
    html += '<td colspan="2">Cart Total:</td>';
    html += '<td>$' + getOrderTotal(bikes, cart) + '</td>';
    html += '</tr>';
    return html;
};
totalsTable.innerHTML = totalsRowHtml();

function processOrder() {
    alert('processing');
}