<template>
  <v-container class="product">
    <v-row class="text-center">
      <v-col cols="12">
        <h1>
          {{ productName }}
        </h1>
      </v-col>
      <v-col cols="12">
        <div v-for="image in images" :key="image.id">
          <img :src="image" />
        </div>
      </v-col>
      <v-col cols="12">
        <p>
          {{ description }}
        </p>
      </v-col>
      <v-col class="text-right" cols="6">
        <p class="pt-5">${{ (unitAmount * quantity).toFixed(2) }}</p>
      </v-col>
      <v-col cols="6">
        <v-text-field
          style="max-width: 15%"
          v-model="quantity"
          type="number"
          min="1"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-btn v-if="productLoaded && priceLoaded" @click="addToCart()">
          Add to Cart
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn :to="{ name: 'Cart' }">
          View Cart
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'Product',
  data: function() {
    return {
      active: false,
      images: [],
      name: '',
      description: '',
      productId: '',
      productName: '',
      quantity: 1,
      productLoaded: false,
      priceLoaded: false,
      unitAmount: null,
    }
  },
  methods: {
    addToCart() {
      let payload = {
        priceId: this.priceId,
        quantity: this.quantity,
        product: {
          productId: this.productId,
          active: this.active,
          images: this.images,
          name: this.name,
          description: this.description,
          unitAmount: this.unitAmount,
        },
      }
      this.$store.dispatch('addToCart', payload)
    },
    async getStripeProduct() {
      http
        .get('widgets/getStripeProduct/' + this.productId)
        .then((res) => {
          this.active = res.data.active
          this.images = res.data.images
          this.name = res.data.name
          this.description = res.data.description
          this.productLoaded = true
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    async getStripePrice() {
      http
        .get('widgets/getStripePrice/' + this.priceId)
        .then((res) => {
          this.unitAmount = (res.data.unit_amount / 100).toFixed(2)
          this.priceLoaded = true
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  },
  created() {
    this.productId = this.$route.params.id
    if (this.$route.query.productName) {
      this.productName = this.$route.query.productName
    }
  },
  mounted() {
    this.getStripeProduct()
    this.getStripePrice()
    this.$store.dispatch('loggedIn')
  },
}
</script>

<style scoped></style>
