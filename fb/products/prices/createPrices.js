require('dotenv').config()
const _ = require('lodash')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const productPrices = require('./productPrices.json')

async function createStripePrice(price) {
  await stripe.prices.create(price, function(err, price) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
}

async function callStripePriceCreate(prices) {
  if (Array.isArray(prices)) {
    console.log('isArray')
    _.forEach(prices, (price) => {
      createStripePrice(price)
    })
  } else {
    console.log('!isArray')
    await stripe.prices.create(prices, function(err, price) {
      // asynchronously called
    })
  }
}

callStripePriceCreate(productPrices)

// CREATE A PRODUCT:
//     PARAMETERS:
//       REQUIRED:
//         currency:
//          Three-letter ISO currency code, in lowercase. Must be a
//          supported currency.
//         function:
//           addName(weeblyProduct)

//         unit_amount
//          A positive integer in cents (or 0 for a free price) representing
//          how much to charge.
//         function:
//           addName(weeblyProduct)

//       OPTIONAL:
//         active:
//           Whether the price is currently active. Defaults to true.

//         metadata:
//           Set of key-value pairs that you can attach to an object.
//           This can be useful for storing additional information
//           about the object in a structured format. Individual keys
//           can be unset by posting an empty value to them. All keys
//           can be unset by posting an empty value to metadata.
//         function:
//           addActive()

//         nickname:
//           A brief description of the price, hidden from customers.
//         function:
//           addDescription(weeblyProduct)

//         tiers:
//           Each element represents a pricing tier. This parameter requires
//           billing_scheme to be set to tiered. See also the documentation
//           for billing_scheme.

//         tiers_mode:
//           Defines if the tiering price should be graduated or volume based.
//           In volume-based tiering, the maximum quantity within a period
//           determines the per unit price, in graduated tiering pricing can
//           successively change as the quantity grows.

//         billing_scheme:
//           Describes how to compute the price per period. Either per_unit
//           or tiered. per_unit indicates that the fixed amount (specified
//           in unit_amount or unit_amount_decimal) will be charged per
//           unit in quantity (for prices with usage_type=licensed), or per
//           unit of total usage (for prices with usage_type=metered). tiered
//           indicates that the unit pricing will be computed using a tiering
//           strategy as defined using the tiers and tiers_mode attributes.

//         lookup_key:
//           A lookup key used to retrieve prices dynamically from a static string.

//         product_data:
//           These fields can be used to create a new product that this price
//           will belong to.

//         transfer_lookup_key:
//           If set to true, will atomically remove the lookup key from the
//           existing price, and assign it to this price.

//         transform_quantity:
//           Apply a transformation to the reported usage or set quantity
//           before computing the billed price. Cannot be combined with tiers.
//           Defaults to true. May only be set if type=good
//         function:
//           addActive()

//         unit_amount_decimal:
//           Same as unit_amount, but accepts a decimal value with at most
//           12 decimal places. Only one of unit_amount and unit_amount_decimal can be set.
//         function:
//           addActive()
