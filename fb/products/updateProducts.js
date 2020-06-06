// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('dotenv').config()
const _ = require('lodash')
const glob = require('glob')
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let products = require('./products.json')

// here, Need to add parameters
_.forEach(products.products, async (product) => {
  // console.log(product)
  await stripe.products.update(
    'product id here',
    { addParameterToUpdate: 'here' },
    function(err, product) {
      // asynchronously called
      if (err) {
        console.log(err)
      }
    }
  )
})
