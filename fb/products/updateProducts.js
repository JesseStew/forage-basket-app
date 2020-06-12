// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('dotenv').config()
const _ = require('lodash')
const glob = require('glob')
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let paramsExample = {
  active: true,
  description: '',
  metadata: '',
  name: '',
  attributes: [],
  caption: '',
  images: [''],
  package_dimensions: {
    height: 'Height, in inches. Maximum precision is 2 decimal places.',
    length: 'Length, in inches. Maximum precision is 2 decimal places.',
    weight: 'Weight, in ounces. Maximum precision is 2 decimal places.',
    width: 'Width, in inches. Maximum precision is 2 decimal places.',
  },
  shippable: true,
  statement_descriptor:
    'An arbitrary string to be displayed on your customer’s credit card or bank statement.',
  unit_label:
    'A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions. May only be set if type=service.',
  url:
    'A URL of a publicly-accessible webpage for this product. May only be set if type=good.',
}

let shiaqgaSuperConcentrateParams = require('./productsByCategory/shiaqgaSuperConcentrate.json')
let shiaqgaOriginalParams = require('./productsByCategory/shiaqgaOriginal.json')
let essentialOilSinglesParams = require('./productsByCategory/essentialOilsSingles.json')
let essentialOilBlendsParams = require('./productsByCategory/essentialOilsBlends.json')
let shiaqgaPetImmunityParams = require('./productsByCategory/shiaqgaPetImmunity.json')
let necklacesParams = require('./productsByCategory/necklaces.json')
let essentialOilsAccessoriesParams = require('./productsByCategory/essentialOilsAccessories.json')

getCount(essentialOilBlendsParams)

// stripeTimer(essentialOilsAccessoriesParams, 15, updateStripeProducts)

// Funtions
function getCount(products) {
  let itr = 1
  let last = _.last(products)
  _.forEach(products, (product) => {
    if (product === last) {
      console.log('Total count: ', itr)
    }
    itr++
  })
}

function findDuplicates(products) {
  _.forEach(products, (itr) => {
    let itrId = _.keys(itr)[0]
    let itrDescription = itr[itrId].description
    let description1 = _.find(products, (product) => {
      let productId = _.keys(product)[0]
      let productDescription = product[productId].description

      return itrDescription == productDescription
    })
    let description2 = _.findLast(products, (product) => {
      let productId = _.keys(product)[0]
      let productDescription = product[productId].description

      return itrDescription == productDescription
    })
    if (description1 != description2) {
      console.log(description1, ' has a duplicate')
    }
  })
}

async function updateStripeProducts(productJSON, itr) {
  let productId = _.keys(productJSON)[0]
  let paramJSON = productJSON[_.keys(productJSON)[0]]
  await stripe.products.update(productId, paramJSON, function(err, product) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
  // console.log('createStripeProduct', productId, 'itr: ', itr)
  // console.log('productId: ', productId, '\nparamJSON: ', paramJSON)
}

function stripeTimer(products, length, stripeFunction) {
  for (let itr = 1; itr <= length; itr++) {
    let product = products[itr - 1]
    if (itr === 1) {
      console.log('products.length: ', products.length)
    }
    if (itr === length) {
      console.log('itr: ', itr)
    }
    stripeFunction(product, itr)
    if (itr === length) {
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
