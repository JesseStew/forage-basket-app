// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('dotenv').config()
const _ = require('lodash')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let shiaqgaSuperConcentrate = {
  name: 'Shiaqga Super Concentrate',
  description:
    '<p><strong>4oz - $176.00</strong></p><p><strong>(Discounts apply when more bottles are purchased at one time. For example, purchasing 2 bottles of the Super Concentrate with the quantity of 1 will enable you to save $12.00.) </strong></p><p><br /></p><ul><li><strong>This bottle size is for people who need a jumpstart on their healing regiment.</strong></li><li><strong>The 4oz bottle is twice the size as our regular formula with all the same ingredients. </strong></li><li><strong>Shiaqga it contains is 67% more concentrated. (Now a 2000% extract!) </strong></li><li><strong>We also added 10 times more of the advanced technology extracted Sacred Frankincense than in the original formula bottle of Shiaqga. </strong></li><li><strong>This is a 30 day supply at the normal four dropper squirts a day usage. </strong></li></ul><p><br /></p><p><strong><a href="http://weebly-link/910964010114262300">Click here to return to the main shopping page.</a></strong>​</p>',
  images: [
    'https://www.shiaqga.com/uploads/1/2/2/5/122567626/s386380882359807143_p5_i6_w2400.png',
  ],
  active: true,
  shippable: true,
  type: 'good',
}

const products = require('./createStripeProducts.json')

async function createStripeProducts(product) {
  await stripe.products.create(product, function(err, product) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
  // console.log('createStripeProduct')
}

stripeTimer(products.products, 15, createStripeProducts)

function stripeTimer(products, length, stripeFunction) {
  for (let itr = 1; itr <= length; itr++) {
    let product = products[itr - 1]
    stripeFunction(product)
    if (itr === 0) {
      console.log('products.length: ', products.length)
    }
    if (itr === length - 1) {
      console.log('itr: ', itr)
    }
    if (itr === length - 1) {
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
