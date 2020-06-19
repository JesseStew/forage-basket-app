<template>
  <div class="product">
    <h1 v-if="cart.length > 0">
      Items in Cart
    </h1>
    <h1 v-else>
      Cart is Empty
    </h1>
    <v-data-table :headers="headers" :items="cart"> </v-data-table>
    <v-btn @click="checkout()">
      Buy Items in Cart
    </v-btn>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapState } from 'vuex'

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
      headers: [
        {
          text: 'Product Name',
          align: 'start',
          value: 'product.name',
        },
        {
          text: 'Price',
          align: 'start',
          value: 'price',
        },
        {
          text: 'Quantity',
          align: 'start',
          value: 'quantity',
        },
      ],
    }
  },
  computed: {
    ...mapState(['cart', 'user']),
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
      if (this.cart.length > 0) {
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
      }
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
