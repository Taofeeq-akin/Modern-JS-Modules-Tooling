// Importing Module
import { addToCart, cart, totalPrice, totalQuantity} from './shoppingCart.js'
console.log('Importing Module')

addToCart('Bread', 5)
console.log(cart)

console.log(totalPrice, totalQuantity)