import { getOrderTotal } from '../src/checkout-functions.js';
import { bikes } from './data/bikes.js';
import { cart } from './data/order.js';

getOrderTotal(bikes, cart);  // currently used here for debugging purposes