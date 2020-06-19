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
    <v-btn @click="checkout()">
      Buy Items in Cart
    </v-btn>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'

import ProductLink from '@/components/ProductLink.vue'

const stripe = Stripe('pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ')

export default {
  name: 'Cart',
  data: function() {
    return {
      customer: '',
      sessionId: '',
      errorMessage: null,
      active: false,
      images: [],
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
    checkout() {
      this.$store.dispatch('checkout')
    },
    removeFromCart() {
      // here,
    },
    redirectToCheckout() {
      stripe
        .redirectToCheckout({
          sessionId: this.sessionId,
        })
        .then((result) => {
          if (result.error) {
            this.errorMessage = result.error.message
          }
        })
    },
    getStripeProducts() {
      this.$_.forEach(this.cart, (item) => {
        console.log(item.product)
        this.products.push({
          active: item.product.active,
          images: item.product.images,
          name: item.product.name,
          description: item.product.description,
          priceId: item.priceId,
          productId: item.product.productId,
          quantity: item.quantity,
        })
      })
    },
  },
  created() {
    this.productId = this.$route.params.id
    if (this.$route.query.priceId) {
      this.priceId = this.$route.query.priceId
    }
  },
  mounted() {
    this.$store.dispatch('loggedIn')
    this.getStripeProducts()
  },
  components: {
    ProductLink,
  },
}
</script>

<style scoped></style>
