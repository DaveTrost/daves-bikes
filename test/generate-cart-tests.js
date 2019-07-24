import { generateCartItem } from '../src/generate-cart-item.js';

QUnit.module('generateCartItem Tests');

QUnit.test('generates a cart element from a bike sale', assert => {
    const cartEle = {
        code: 'bmx-kids',
        quantity: 2
    };
    const expected = '<tr><td><img class="thumbnail" src="assets/bmx-kids.png" alt="image of 16-inch Kids BMX Bike"></td><td>16-inch Kids BMX Bike</td><td>2</td><td>$300</td><td><b>$600</b></td></tr>';
    
    const dom = generateCartItem(cartEle);
    const result = dom.outerHTML;
    
    assert.equal(result, expected);
});
