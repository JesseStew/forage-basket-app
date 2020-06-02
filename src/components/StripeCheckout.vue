<template>
  <div>
    <!-- <h3>{{ currentUser.firstName }} {{ currentUser.lastName }}</h3> -->
    <v-btn @click="createStripeSession"></v-btn>
  </div>
</template>

<script>
import http from '../http-common'
import { loadStripe } from '@stripe/stripe-js'
import firebase from 'firebase/app'
import 'firebase/firestore'

const Stripe = loadStripe('pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ')

export default {
  data() {
    return {
      customer: '',
      customer_email: '',
      mode: 'payment',
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
    async createStripeSession() {
      this.customer = await firebase
        .firestore()
        .collection('user')
        .doc(this.uid)
        .collection('stripe')
        .doc('stripe_customer')
        .get()
      http
        .post('/createStripeSession', {
          customer: this.customer.stripe_customer_id,
          customer_email: this.email,
          mode: this.mode,
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  },
  mounted() {},
}
</script>

<style scoped></style>
