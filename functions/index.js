'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')
const express = require('express')
const app = express()

admin.initializeApp()
// const logging = require('@google-cloud/logging')()
const stripe = require('stripe')(functions.config().stripe.token)

app.use(cors({ origin: true }))

app.get('/getStripeProduct/:productId', async (req, res) => {
  const product = await stripe.products.retrieve(req.params.productId)
  res.send(product)
})

app.get('/getStripePrice/:priceId', async (req, res) => {
  const price = await stripe.prices.retrieve(req.params.priceId)
  res.send(price)
})

app.get('/getAllStripePrices', async (req, res) => {
  const prices = await stripe.prices.list({ limit: 100 })
  res.send(prices)
})

app.post('/create-session', async (req, res) => {
  console.log('req.body: ', req.body)
  const session = await stripe.checkout.sessions.create({
    success_url: 'https://forage-basket-7a7ed.web.app/cart',
    cancel_url: 'https://forage-basket-7a7ed.web.app/cart',
    customer: req.body.customer,
    customer_email: req.body.customer_email,
    payment_method_types: ['card'],
    mode: req.body.mode,
    line_items: req.body.line_items,
  })
  res.send({
    sessionId: session.id,
  })
})

exports.widgets = functions.https.onRequest(app)

// When a user is created, register them with Stripe
exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({ email: user.email })
  return admin
    .firestore()
    .collection('user')
    .doc(user.uid)
    .collection('stripe')
    .doc('stripe_customer')
    .set({ stripe_customer_id: customer.id })
})

// exports.createStripeSession = functions.https.onRequest((request, response) => {
//   // here, On Deployment Setup CORS correctly
//   cors(request, response, async () => {
//     const session = await stripe.checkout.sessions.create({
//       success_url: 'http://localhost:8080/cart',
//       cancel_url: 'http://localhost:8080/cart',
//       customer: request.body.customer,
//       customer_email: request.body.customer_email,
//       payment_method_types: ['card'],
//       mode: request.body.mode,
//       line_items: [
//         {
//           price: 'price_HO8XRlZdGcXJl7',
//           quantity: 2,
//         },
//       ],
//     })
//     response.send({
//       sessionId: session.id,
//     })
//   })
// })
