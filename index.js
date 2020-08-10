var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let price = Math.floor(Math.random() * 100);

var newCart = {
itemName: item,
itemPrice: price
}

cart.push(newCart);
return '${item} has been added to your cart.';

// write your code here
}

function viewCart() {
 
} 
function total() {
  let t = 0 // write your code here
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
 // write your code here
}
