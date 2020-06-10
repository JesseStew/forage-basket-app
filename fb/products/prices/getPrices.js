require('dotenv').config()
const _ = require('lodash')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function retrievePrice(priceId) {
  await stripe.prices.retrieve(priceId, function(err, price) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
}

async function logPrice() {
  let price = await retrievePrice('price_1GrtGRHhLIxiPD1kiK4y7nEE')
  console.log(price)
}

logPrice()
