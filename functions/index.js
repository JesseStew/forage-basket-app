'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })

admin.initializeApp()
// const logging = require('@google-cloud/logging')()
const stripe = require('stripe')(functions.config().stripe.token)

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

exports.createStripeSession = functions.https.onRequest((request, response) => {
  // On Deployment Setup CORS correctly
  cors(request, response, () => {
    console.log('request:', request)
    stripe.checkout.sessions.create(
      {
        success_url: 'http://localhost:8080/cart',
        cancel_url: 'http://localhost:8080/cart',
        customer: request.customer,
        customer_email: request.customer_email,
        payment_method_types: ['card'],
        mode: request.mode,
        line_items: [
          {
            price: 'price_HO8XRlZdGcXJl7',
            quantity: 2,
          },
        ],
      },
      (err, session) => {
        // asynchronously called
        console.log(err.message)
        response.end()
      }
    )
    return response.send()
  })
})
