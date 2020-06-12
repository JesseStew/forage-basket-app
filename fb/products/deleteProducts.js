// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('dotenv').config()
const _ = require('lodash')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let products = require('./createdProducts.json')

// Safety
// stripeTimer(products, 16, deleteStripeProducts)

async function deleteStripeProducts(product) {
  console.log('Delete product... ', product.Name)
  await stripe.products.del(product.id, function(err, product) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
}

function stripeTimer(products, length, stripeFunction) {
  for (let itr = 1; itr < length; itr++) {
    let product = products[itr - 1]
    stripeFunction(product)
    if (itr === 0) {
      console.log('products.length: ', products.length)
    }
    if (itr === length - 1) {
      console.log('itr: ', itr)
    }
    if (itr === 15) {
      sleep(1500).then(() => {
        let remainingProducts = _.slice(products, itr, products.length)
        // console.log('itr: ', itr)
        console.log('remainingProducts.length: ', remainingProducts.length)
        if (remainingProducts.length < 1) {
          return
        } else {
          if (remainingProducts.length < length) {
            length = remainingProducts.length + 1
          } else {
            length = 16
          }
          stripeTimer(remainingProducts, length, stripeFunction)
        }
      })
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function deleteProduct(product) {
  console.log('Delete product... ', product.id)
}
