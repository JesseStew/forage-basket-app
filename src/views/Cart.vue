<template>
  <div class="product">
    <h1>
      Items in Cart
    </h1>
    <v-list>
      <v-list-item-group v-model="product">
        <v-list-item
          :to="{
            name: 'Product',
            params: { id: product.productId },
            query: { priceId: product.priceId },
          }"
          avatar
          v-for="product in products"
          :key="product.id"
        >
          <v-list-item-avatar>
            <v-img :src="product.images[0]"></v-img>
          </v-list-item-avatar>
          <v-list-item-title v-html="product.name"> </v-list-item-title>
          <v-list-item-content
            v-html="product.description"
          ></v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-btn @click="createStripeSession()">
      Buy Items in Cart
    </v-btn>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'

import ProductLink from '@/components/ProductLink.vue'

export default {
  name: 'Cart',
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
      priceId: '',
      quantity: 1,
      products: [],
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
    removeFromCart() {
      // here,
    },
    async createStripeSession() {
      console.log('uid: ', this.uid)
      console.log('cart: ', this.cart)
      let cart = []
      this.$_.forEach(this.cart, (item) => {
        cart.push({
          price: item.price,
          quantity: item.quantity,
        })
        console.log('price: ', item.price)
        console.log('quantity: ', item.quantity)
      })
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
          line_items: cart,
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
    async getStripeProduct(productId, priceId) {
      http
        .get('widgets/getStripeProduct/' + productId)
        .then((res) => {
          console.log('res: ', res)
          this.products.push({
            active: res.data.active,
            images: res.data.images,
            name: res.data.name,
            description: res.data.description,
            priceId: priceId,
            productId: productId,
          })
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getStripeProducts() {
      this.$_.forEach(this.cart, (item) => {
        console.log(item)
        this.getStripeProduct(item.productId, item.price)
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
    this.$store.dispatch('loggedIn')
    this.getStripeProducts()
  },
  components: {
    ProductLink,
  },
}
</script>

<style scoped></style>
