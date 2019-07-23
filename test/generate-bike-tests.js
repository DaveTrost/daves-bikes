import { generateBike } from '../src/generate-bike.js';

QUnit.module('generateBike Tests');

QUnit.test('generates a bike', assert => {
    const bmx20 = {
        code: 'bmx-20',
        name: '20-inch BMX Bike',
        image: 'assets/bmx-20.jpg',
        description: 'A trick machine ready for backflips at the bike park',
        category: 'bmx',
        price: 500.00,
        cost: 200
    };
    const expected = '<li class="bmx-20" title="20-inch BMX Bike"><img src="assets/bmx-20.jpg" alt="image of 20-inch BMX Bike"><h3>20-inch BMX Bike</h3><button value="bmx-20">Add to Cart</button><p>A trick machine ready for backflips at the bike park</p><p class="price">$500</p></li>';
    
    const dom = generateBike(bmx20);
    const result = dom.outerHTML;
    
    assert.equal(result, expected);
});
