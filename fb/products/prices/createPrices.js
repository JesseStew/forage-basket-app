var stripe = require('stripe')('sk_test_6OjhM1vXBSBEldnOMkVwxTtM00JIsvmRFR')

stripe.prices.create(
  {
    unit_amount: 2000,
    currency: 'usd',
    recurring: { interval: 'month' },
    product: 'prod_HOmMMaDYoIWmxa',
  },
  function(err, price) {
    // asynchronously called
  }
)
let products = require('./products.json')

_.forEach(products.products, async (product) => {
  // console.log(product)
  await stripe.prices.create(
    {
      unit_amount: 2000,
      currency: 'usd',
      recurring: { interval: 'month' },
      product: 'prod_HOmMMaDYoIWmxa',
    },
    function(err, product) {
      // asynchronously called
      if (err) {
        console.log(err)
      }
    }
  )
})
