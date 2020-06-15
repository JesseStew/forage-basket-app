<template>
  <div>
    <!-- <h3>{{ currentUser.firstName }} {{ currentUser.lastName }}</h3> -->
    <p v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <v-btn @click="createStripeSession"></v-btn>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data() {
    return {
      stripeAPIToken: 'pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ',
      customer: '',
      customer_email: '',
      mode: 'payment',
      sessionId: '',
      errorMessage: null,
      stripe: '',
    }
  },
  computed: {
    uid: function() {
      return this.$store.state.user.uid
    },
    email: function() {
      return this.$store.state.user.email
    },
  },
  methods: {
    includeStripe(URL, callback) {
      let documentTag = document,
        tag = 'script',
        object = documentTag.createElement(tag),
        scriptTag = documentTag.getElementsByTagName(tag)[0]
      object.src = '//' + URL
      if (callback) {
        object.addEventListener(
          'load',
          function(e) {
            callback(null, e)
          },
          false
        )
      }
      scriptTag.parentNode.insertBefore(object, scriptTag)
    },
    async createStripeSession() {
      this.customer = await firebase
        .firestore()
        .collection('user')
        .doc(this.uid)
        .collection('stripe')
        .doc('stripe_customer')
        .get()
      http
        .post('/widgets/create-session', {
          customer: this.customer.stripe_customer_id,
          customer_email: this.email,
          mode: this.mode,
        })
        .then((response) => {
          console.log('response: ', response)
          console.log('response.data.sessionId: ', response.data.sessionId)
          this.sessionId = response.data.sessionId
          this.redirectToCheckout()
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    configureStripe() {
      this.stripe = Stripe(this.stripeAPIToken)
    },
    redirectToCheckout() {
      this.stripe
        .redirectToCheckout({
          sessionId: this.sessionId,
        })
        .then((result) => {
          if (result.error) {
            this.errorMessage = result.error.message
          }
        })
    },
  },
  mounted() {
    this.includeStripe(
      'js.stripe.com/v3/',
      function() {
        this.configureStripe()
      }.bind(this)
    )
  },
}
</script>

<style scoped></style>
