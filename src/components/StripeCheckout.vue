<template>
  <div v-if="currentUser">
    <h3>{{ currentUser.firstName }} {{ currentUser.lastName }}</h3>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

const Stripe = loadStripe('pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ')

export default {
  data: {
    sources: {},
    stripeCustomerInitialized: false,
    newCreditCard: {
      number: '4242424242424242',
      cvc: '111',
      exp_month: 1,
      exp_year: 2020,
      address_zip: '00000',
    },
    charges: {},
    newCharge: {
      source: null,
      amount: 2000,
    },
  },
  computed: {
    currentUser: function() {
      return {
        uid: this.$store.state.user.uid,
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName,
        userName: this.$store.state.user.userName,
        email: this.$store.state.user.email,
        emailVerified: this.$store.state.user.emailVerified,
        photoURL: this.$store.state.user.photoURL,
        isAnonymous: this.$store.state.user.isAnonymous,
      }
    },
    sources: {},
    stripeCustomerInitialized: false,
    newCreditCard: {
      number: '4242424242424242',
      cvc: '111',
      exp_month: 1,
      exp_year: 2020,
      address_zip: '00000',
    },
    charges: {},
    newCharge: {
      source: null,
      amount: 2000,
    },
  },
  methods: {
    listen: function() {
      firebase
        .firestore()
        .collection('stripe_customers')
        .doc(`${this.currentUser.uid}`)
        .onSnapshot(
          (snapshot) => {
            this.stripeCustomerInitialized = snapshot.data() !== null
          },
          () => {
            this.stripeCustomerInitialized = false
          }
        )
      firebase
        .firestore()
        .collection('stripe_customers')
        .doc(`${this.currentUser.uid}`)
        .collection('sources')
        .onSnapshot(
          (snapshot) => {
            let newSources = {}
            snapshot.forEach((doc) => {
              const id = doc.id
              newSources[id] = doc.data()
            })
            this.sources = newSources
          },
          () => {
            this.sources = {}
          }
        )
      firebase
        .firestore()
        .collection('stripe_customers')
        .doc(`${this.currentUser.uid}`)
        .collection('charges')
        .onSnapshot(
          (snapshot) => {
            let newCharges = {}
            snapshot.forEach((doc) => {
              const id = doc.id
              newCharges[id] = doc.data()
            })
            this.charges = newCharges
          },
          () => {
            this.charges = {}
          }
        )
    },
    submitNewCreditCard: function() {
      Stripe.card.createToken(
        {
          number: this.newCreditCard.number,
          cvc: this.newCreditCard.cvc,
          exp_month: this.newCreditCard.exp_month,
          exp_year: this.newCreditCard.exp_year,
          address_zip: this.newCreditCard.address_zip,
        },
        (status, response) => {
          if (response.error) {
            this.newCreditCard.error = response.error.message
          } else {
            firebase
              .firestore()
              .collection('stripe_customers')
              .doc(this.currentUser.uid)
              .collection('tokens')
              .add({ token: response.id })
              .then(() => {
                this.newCreditCard = {
                  number: '',
                  cvc: '',
                  exp_month: 1,
                  exp_year: 2017,
                  address_zip: '',
                }
              })
          }
        }
      )
    },
    submitNewCharge: function() {
      firebase
        .firestore()
        .collection('stripe_customers')
        .doc(this.currentUser.uid)
        .collection('charges')
        .add({
          source: this.newCharge.source,
          amount: parseInt(this.newCharge.amount),
        })
    },
    signOut: function() {
      this.$store.dispatch('signOut')
    },
  },
}
</script>

<style scoped></style>
