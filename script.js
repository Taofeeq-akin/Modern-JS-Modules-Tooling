// Importing Module
// import { addToCart, cart, totalPrice as price, tq} from './shoppingCart.js'
// console.log('Importing Module')

// import shoppingCart from "./shoppingCart";

// addToCart('Bread', 5)
// console.log(cart)
// console.log(price, tq)

// We can also import all module ppt in this way
// import * as ShoppingCart from './shoppingCart.js' // start the import name to make it like an objeact

// ShoppingCart.addToCart('Yam', 13)
// console.log(ShoppingCart.totalPrice)

// import add from './shoppingCart.js';
// add('Apple', 10);

// Old way of writing module pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCart = 10;
  const totalPrice = 200;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} is added to Cart sold at ${shoppingCart}$`);
  };

  const orderStock = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} orderd from supplier`);
  };

  //   So we have to return the variable we want to be global cus they are all private for now
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('Bread', 5)
console.log(ShoppingCart2)
console.log(ShoppingCart2.shoppingCart) // Undefine cus its private
