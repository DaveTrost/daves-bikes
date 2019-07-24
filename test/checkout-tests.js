import { findProduct, getLineTotal, getOrderTotal } from '../src/checkout.js';
import { bikes } from '../src/data/bikes.js';

QUnit.module('Checkout Tests');

QUnit.test('find a bike by code', assert => {
    const code = 'bmx-20';
    const expected = {
        code: 'bmx-20',
        name: '20-inch BMX Bike',
        image: 'assets/bmx-20.jpg',
        description: 'A trick machine ready for backflips at the bike park',
        category: 'bmx',
        price: 500.00,
        cost: 200
    };
    
    assert.deepEqual(findProduct(bikes, code), expected);
});

QUnit.test('calculate a line total', assert => {
    assert.equal(getLineTotal(3, 2.01), 6.03);
});

QUnit.test('calculate an order total', assert => {
    const someBikes = [
        {
            code: 'bmx-20',
            name: '20-inch BMX Bike',
            price: 500.00,
        }, {
            code: 'bmx-kids',
            name: '16-inch Kids BMX Bike',
            price: 300.00,
        }, {
            code: 'mountain-hardtail',
            name: 'Hardtail Mountain Bike',
            price: 1300.00,
        }
    ];
    const someCart = [
        {
            code: 'bmx-kids',
            quantity: 5
        }, {
            code: 'mountain-hardtail',
            quantity: 2
        }
    ];
    assert.equal(getOrderTotal(someBikes, someCart), 4100.00);
});

