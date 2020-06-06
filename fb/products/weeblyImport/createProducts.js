// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('dotenv').config()
const _ = require('lodash')
// const glob = require('glob')
// const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// const product = await stripe.products.create({
//   name: 'Starter Dashboard',
// })

let productsForCreation1 = require('./createStripeProducts/createStripeProducts1.json')
let productsForCreation2 = require('./createStripeProducts/createStripeProducts2.json')
let productsForCreation3 = require('./createStripeProducts/createStripeProducts3.json')
let productsForCreation4 = require('./createStripeProducts/createStripeProducts4.json')
let productsForCreation5 = require('./createStripeProducts/createStripeProducts5.json')

_.forEach(productsForCreation5.products, async (product) => {
  // console.log(product)
  createStripeProducts(product)
})

async function createStripeProducts(product) {
  await stripe.products.create(product, function(err, product) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
}

// glob.sync('./health/articles/*.json').forEach((file) => {
//   console.log(file)
//   let data = require(file)
//   console.log(data.order)
//   data.order = itr++
//   console.log(data.order)
//   informationRef.doc().set(data)
// })

// stripe.products.create({ name: 'Gold Special' }, function(err, product) {
//   // asynchronously called
// })

// const firebase = require('firebase')

// const firebaseConfig = {
//   apiKey: 'AIzaSyBnHjfJLfjTWBe9RBlGIZKM44wSAOFDiEk',
//   authDomain: 'forage-basket-7a7ed.firebaseapp.com',
//   databaseURL: 'https://forage-basket-7a7ed.firebaseio.com',
//   projectId: 'forage-basket-7a7ed',
//   storageBucket: 'forage-basket-7a7ed.appspot.com',
//   messagingSenderId: '66382564064',
//   appId: '1:66382564064:web:c44d5b93ac50ba83611e85',
//   measurementId: 'G-LR70HPR1EX',
// }

// firebase.initializeApp(firebaseConfig)

// const db = firebase.firestore()
// const informationRef = db.collection('products')

// let itr = 1

// const data = require('./products.json')

// informationRef.doc().set(data)
