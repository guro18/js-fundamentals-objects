// This extension will require you to read the test failure messages to
// figure out what you need to change, not all of the information has been
// provided in the comments below.

// Do not edit this book object directly
const book = {
  name: 'Clean Code',
  author: 'Robert C. Martin',
  category: 'Cooking',
  isbn: {
    isbn10: '9780132350884',
    asin: '0132350882'
  },
  publisher: 'Prentice Hall',
  dimensions: '10x12x2'
}

delete book.isbn.asin
delete book.dimensions

/* eslint-disable no-unused-vars */
const isbn13 = '978-0132350884'
book.isbn.isbn13 = isbn13

// 1. Set this to the book name - using the book object
const name = book.name

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10

// Do not modify this basket object directly
const basket = {
  items: [
    {
      name: 'Apple',
      quantity: 10,
      price: 1
    },
    {
      name: 'Lemon',
      quantity: 2,
      price: 0.5
    }
  ],
  voucherCodes: ['AA-AA-A', 'BB-BB-B']
}

const Orange = { name: 'Oranges', price: 0.75, quantity: 4 }

basket.items.push(Orange, Orange, Orange, Orange)

book.category = 'Programming'

// 3. Set this variable to the length of the baskets voucher codes array - using the basket object
const numberOfVoucherCodes = basket.voucherCodes.length

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]

basket.items[0].price = 2
book.pages = 464

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}
