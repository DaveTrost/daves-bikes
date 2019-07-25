import { store } from '../src/data/store.js';
import { bikes } from '../src/data/bikes.js';

const test = QUnit.test;

QUnit.module('Store Tests');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('test get and save', assert => {
    const key = 'testData';
    const item = { code: 'bike master' };
    store.save(key, item);
    assert.deepEqual(store.get(key), item);
});

test('test bootstrapping works in getProducts', assert => {
    assert.deepEqual(store.getProducts(), bikes);
});

test('test get cart returns empty', assert => {
    assert.deepEqual(store.getShoppingCart(), []);
});

test('test get product', assert => {
    const code = bikes[0].code;
    store.getProducts();
    assert.deepEqual(store.getProduct(code), bikes[0]);
});

test('test we can put something into the cart (empty cart case)', assert => {
    const expected = [{ 
        code: 'bmx-20', 
        quantity: 1
    }];
    store.orderProduct('bmx-20');
    assert.deepEqual(store.getShoppingCart(), expected);
});

test('test we can put something into the cart (non-empty cart case)', assert => {
    const expected = [{ 
        code: 'bmx-20', 
        quantity: 2
    }];
    store.orderProduct('bmx-20');
    store.orderProduct('bmx-20');
    assert.deepEqual(store.getShoppingCart(), expected);
});

test('test we can put multiple items into the cart (empty cart case)', assert => {
    const expected = [{ 
        code: 'bmx-20', 
        quantity: 2
    }];
    store.orderProduct('bmx-20', 2);
    assert.deepEqual(store.getShoppingCart(), expected);
});

test('test we can put multiple items into the cart (non-empty cart case)', assert => {
    const expected = [{ 
        code: 'bmx-20', 
        quantity: 3
    }];
    store.orderProduct('bmx-20');
    store.orderProduct('bmx-20', 2);
    assert.deepEqual(store.getShoppingCart(), expected);
});

