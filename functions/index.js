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

exports.addAdminRole = functions.https.onCall((data, context) => {
  // check request made by admin
  if (context.auth.token.admin !== true) {
    return { error: 'You must be an admin.'}
  } else {
    // get user, add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      })
    }).then(() => {
      return {
        message: `Success! ${data.email} has been made an admin.`
      }
    }).catch(err => {
      return err
    })
  }
})
