'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
// const logging = require('@google-cloud/logging')()
const stripe = require('stripe')(functions.config().stripe.token)

exports.paymentIntent = functions.https.onRequest((request, response) => {
  stripe.products.create(
    {name: 'Gold Special'},
    function(err, product) {
      // asynchronously called
    }
  )
}
