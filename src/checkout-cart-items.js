import { getOrderTotal } from '../src/checkout.js';
import { bikes } from '../src/data/bikes.js';
import { cart } from '../src/data/order.js';

getOrderTotal(bikes, cart);  // currently used here for debugging purposes