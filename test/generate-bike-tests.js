import generateBike from '../src/generate-bike.js';

QUnit.module('generateBike Tests');

QUnit.test('generates a bike', assert => {
    const bmx20 = {
        code: 'bmx-20',
        name: '20" BMX bike',
        image: 'assets/bmx-20.jpg',
        description: 'A trick machine ready for back flips at the bike park',
        category: 'bmx',
        price: 500.00,
        cost: 200
    };
    const expected = '';  //HTML goes here
    
    const dom = generateBike(bmx20);
    const result = dom.outerHTML;
    
    assert.equal(result, expected);
});
