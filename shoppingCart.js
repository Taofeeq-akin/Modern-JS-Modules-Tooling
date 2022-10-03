// Exporting Module
console.log('Exporting Module');

export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} is added to Cart`);
};

const totalPrice = 210;
const totalQuantity = 20;
export { totalPrice, totalQuantity as tq };

// It's said earlia we have two type of export which are Default export and Named export

// Default Export: this use wen we only want to export one thing per module

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} is added to Cart`);
}
