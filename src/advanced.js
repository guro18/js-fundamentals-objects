// 1. create a const variable called item1 and set it to an object with the following properties:
// name of 'item1', price of 400, and quantity of 4, hasDiscount of true, discount of 0.3
const item1 = {
  name: 'item1',
  price: 400,
  quantity: 4,
  hasDiscount: true,
  discount: 0.3
}

// 2. create a const variable called item2 and set it to an object with the following properties:
// name of 'item2', price of 300, and quantity of 3, hasDiscount of false, discount of 0.0
const item2 = {
  name: 'item2',
  price: 300,
  quantity: 3,
  hasDiscount: false,
  discount: 0.0
}
// 3. create a const variable called shoppingBasket and set it to an object with the following properties:
// items - an array containing item1 and item2, and shopName called 'Sheepmart'
const shoppingBasket = {
  items: [item1, item2],
  shopName: 'Sheepmart'
}

module.exports = {
  item1,
  item2,
  shoppingBasket
}
