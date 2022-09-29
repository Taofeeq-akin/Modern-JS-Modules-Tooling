// Importing Module
import { addToCart, cart, totalPrice as price, tq} from './shoppingCart.js'
console.log('Importing Module')

addToCart('Bread', 5)
console.log(cart)

console.log(price, tq)