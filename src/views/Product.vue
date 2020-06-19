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

    <v-btn v-if="productLoaded" @click="addToCart()">
      Add to Cart
    </v-btn>
    <v-btn :to="{ name: 'Cart' }">
      View Cart
    </v-btn>
    <v-text-field v-model="quantity" type="number" min="1"></v-text-field>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Product',
  data: function() {
    return {
      active: false,
      images: [],
      name: '',
      description: '',
      productId: '',
      priceId: '',
      quantity: 1,
      productLoaded: false,
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
        product: {
          productId: this.productId,
          active: this.active,
          images: this.images,
          name: this.name,
          description: this.description,
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
  },
  created() {
    this.productId = this.$route.params.id
    if (this.$route.query.priceId) {
      this.priceId = this.$route.query.priceId
    }
  },
  mounted() {
    this.getStripeProduct()
    this.$store.dispatch('loggedIn')
  },
}
</script>

<style scoped></style>
