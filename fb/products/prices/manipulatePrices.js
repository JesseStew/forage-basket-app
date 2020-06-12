require('dotenv').config()
const _ = require('lodash')
const glob = require('glob')
const path = require('path')
const fs = require('fs')

const weeblyProducts = require('../weeblyImport/weeblyProducts.json')
const products = require('../createdProducts.json')
const productPrices = require('./productPrices.json')

manipulateProductPrices(productPrices)

// createPrices(weeblyProducts, products)

// FUNCTIONS
function manipulateProductPrices(productPrices) {
  _.forEach(productPrices, (price) => {
    priceShiaqgaPetImmunity(price)
    priceShiaqgaSuperConcentrate(price)
    priceShiaqgaOriginalFormula(price)
    // delete price.description
  })
  // console.log(productPrices)
  productPrices = JSON.stringify(productPrices)

  fs.writeFile('productPrices.json', productPrices, 'utf8', (err) => {
    console.log(err)
  })
}

function priceShiaqgaPetImmunity(price) {
  if (price.description == '1 Container Shiaqga Pet Immunity') {
    price.unit_amount = 6800
  }
  if (price.description == '2 Containers Shiaqga Pet Immunity') {
    price.unit_amount = 13600
  }
  if (price.description == '4 Containers Shiaqga Pet Immunity') {
    price.unit_amount = 27200
  }
  if (price.description == '6 Containers Shiaqga Pet Immunity') {
    price.unit_amount = 40800
  }
  if (price.description == '12 Containers Shiaqga Pet Immunity') {
    price.unit_amount = 81600
  }
}

function priceShiaqgaSuperConcentrate(price) {
  if (price.description == '1 Bottle Shiaqga Super Concentrate') {
    price.unit_amount = 17600
  }
  if (price.description == '2 Bottles Shiaqga Super Concentrate') {
    price.unit_amount = 35200
  }
  if (price.description == '4 Bottles Shiaqga Super Concentrate') {
    price.unit_amount = 70400
  }
  if (price.description == '6 Bottles Shiaqga Super Concentrate') {
    price.unit_amount = 105600
  }
  if (price.description == '12 Bottles Shiaqga Super Concentrate') {
    price.unit_amount = 211200
  }
}

function priceShiaqgaOriginalFormula(price) {
  if (price.description == '1 Bottle Shiaqga Original Formula') {
    price.unit_amount = 7600
  }
  if (price.description == '2 Bottles Shiaqga Original Formula') {
    price.unit_amount = 15200
  }
  if (price.description == '4 Bottles Shiaqga Original Formula') {
    price.unit_amount = 30400
  }
  if (price.description == '6 Bottles Shiaqga Original Formula') {
    price.unit_amount = 45600
  }
  if (price.description == '12 Bottles Shiaqga Original Formula') {
    price.unit_amount = 91200
  }
}

function createPrices(weeblyProducts, createdProducts) {
  let prices = []
  let itr = 0
  _.forEach(createdProducts, (product) => {
    if (
      product.id === 'prod_HRTG11G02igxx7' ||
      product.id === 'prod_HRTGWQgPKGG2cW' ||
      product.id === 'prod_HRTGMAOxXbXjkf' ||
      product.id === 'prod_HRTGmbzZ7eynMm' ||
      product.id === 'prod_HRTGgSo5EipMpn'
    ) {
      product.Name = 'Shiaqga'
    }
    let weeblyProductMatch = _.find(weeblyProducts, (o) => {
      return product.Name === o.TITLE
    })
    _.pull(weeblyProducts, weeblyProductMatch)
    if (weeblyProductMatch) {
      itr++
      prices.push({
        product: product.id,
        unit_amount: weeblyProductMatch.PRICE * 100,
        currency: 'usd',
        description: product.Description,
      })
    }
  })
  console.log(prices)
  console.log('Num Products: ', itr)
  productPrices = JSON.stringify(prices)

  fs.writeFile('productPrices.json', productPrices, 'utf8', (err) => {
    console.log(err)
  })
}

function createProduct(product, salePrice) {
  // console.log(product)
  if (salePrice) {
  }
  return {
    name: product.nickname,
    active: true,
    shippable: true,
    type: 'good',
  }
}
function addName(weeblyProduct) {
  return {
    name: weeblyProduct.TITLE,
  }
}

function renameKeys(object) {
  object['nickname'] =
    object['OPTION1 VALUE'] != '' ? object['OPTION1 VALUE'] : object['TITLE']
  // delete object['TITLE']

  object['unit_amount'] = object['PRICE']
  delete object['PRICE']

  object['product'] = object['id']
  delete object['id']
}

// console.log(createStripeProducts)

// productPrices = JSON.stringify(productPrices)
// function addId(createdProducts, productPrice) {
//   let itr = 1
//   _.find(createdProducts, (product) => {
//     return product.TITLE === productPrice.Name
//   }).id = productPrice.id
//   _.forEach(createdProducts, (product) => {
//     // console.log(product.Name, '===', productPrice.TITLE, itr++)
//     if (product.Name === productPrice.TITLE) {
//       // console.log(product)
//       productPrice.id = product.id
//     }
//   })
// }

// let formattedJson = productPrices

// createJsonForStripeRateLimit(formattedJson)

// function createJsonForStripeRateLimit(formattedJson) {
//   console.log('createJsonForStripeRateLimit')
//   let itr = 1
//   let itr2 = 1
//   let localJson = { products: [] }
//   _.forEach(formattedJson, (product) => {
//     localJson.products.push(product)
//     console.log(product)
//     if (itr % 19 === 0 || _.last(formattedJson) == product) {
//       localJson = JSON.stringify(localJson)
//       console.log(localJson)
//       fs.writeFile(
//         'productPrices' + itr2 + '.json',
//         localJson,
//         'utf8',
//         (err) => {
//           console.log(err)
//         }
//       )
//       localJson = { products: [] }
//       itr2 = itr2 + 1
//       console.log(itr2)
//     }
//     itr++
//     console.log(itr)
//   })
// }

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

// let numUniqueWeeblyProducts = 0

// _.forEach(uniqeWeeblyProducts, (product) => {
//   numUniqueWeeblyProducts++
//   // console.log(product)
//   // console.log('numUniqueWeeblyProducts: ', numUniqueWeeblyProducts)
// })

// let totalWeeblyProducts = 0

// _.forEach(weeblyProducts.products, (product) => {
//   totalWeeblyProducts++
//   // console.log(product)
//   // console.log('totalWeeblyProducts: ', totalWeeblyProducts)
// })
// console.log('numUniqueWeeblyProducts: ', numUniqueWeeblyProducts)
// console.log('totalWeeblyProducts: ', totalWeeblyProducts)

//             CHILD PARAMETERS:
//                 REQUIRED:
//                   package_dimensions.height:
//                     Height, in inches. Maximum precision is 2 decimal places.
//                   package_dimensions.length:
//                     Length, in inches. Maximum precision is 2 decimal places.
//                   package_dimensions.weight:
//                     Weight, in ounces. Maximum precision is 2 decimal places.
//                   package_dimensions.width:
//                     Width, in inches. Maximum precision is 2 decimal places.
