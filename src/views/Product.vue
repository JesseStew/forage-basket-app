<template>
  <div class="product">
    <h1>
      {{ name }}
    </h1>
    <div v-for="image in images" :key="image.id">
      <img :src="image" />
    </div>
    <p>
      {{ description }}
    </p>

    <v-btn @click="addToCart()">
      Add to Cart
    </v-btn>
    <v-btn @click="createStripeSession()">
      Buy Items in Cart
    </v-btn>
    <v-text-field v-model="quantity" type="number" min="1"></v-text-field>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'Product',
  data: function() {
    return {
      stripeAPIToken: 'pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ',
      customer: '',
      sessionId: '',
      errorMessage: null,
      stripe: '',
      active: false,
      images: [],
      name: '',
      description: '',
      mode: 'payment',
      productId: '',
      priceId: '',
      quantity: 1,
    }
  },
  computed: {
    uid: function() {
      return this.$store.state.user.uid
    },
    email: function() {
      return this.$store.state.user.email
    },
    cart: function() {
      return this.$store.state.cart
    },
  },
  methods: {
    addToCart() {
      let payload = {
        priceId: this.priceId,
        quantity: this.quantity,
        productId: this.productId,
      }
      this.$store.dispatch('addToCart', payload)
      // this.createStripeSession()
    },
    async createStripeSession() {
      console.log('uid: ', this.uid)
      console.log('cart: ', this.cart)
      console.log(
        this.$_.map(this.cart, (o) => {
          return this.$_.omit(o, [productId])
        })
      )
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
          line_items: this.$_.map(this.cart, (o) => {
            return this.$_.omit(o, [productId])
          }),
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
    async getStripeProduct() {
      http
        .get('widgets/getStripeProduct/' + this.productId)
        .then((res) => {
          console.log('res: ', res)
          this.active = res.data.active
          this.images = res.data.images
          this.name = res.data.name
          this.description = res.data.description
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    configureStripe() {
      this.stripe = Stripe(this.stripeAPIToken)
    },
  },
  created() {
    this.productId = this.$route.params.id
    if (this.$route.query.priceId) {
      this.priceId = this.$route.query.priceId
    }
  },
  mounted() {
    this.includeStripe(
      'js.stripe.com/v3/',
      function() {
        this.configureStripe()
      }.bind(this)
    )
    this.getStripeProduct()
    this.$store.dispatch('loggedIn')
  },
}
</script>

<style scoped></style>
