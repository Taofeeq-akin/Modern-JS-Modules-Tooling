// Importing Module
// import { addToCart, cart, totalPrice as price, tq} from './shoppingCart.js'
// console.log('Importing Module')

// addToCart('Bread', 5)
// console.log(cart)
// console.log(price, tq)

// We can also import all module ppt in this way
// import * as ShoppingCart from './shoppingCart.js' // start the import name to make it like an objeact

// ShoppingCart.addToCart('Yam', 13)
// console.log(ShoppingCart.totalPrice)

import add from './shoppingCart.js';
add('Apple', 10);
