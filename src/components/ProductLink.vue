<template>
  <router-link
    :to="{
      name: 'Product',
      query: { productName: productName, productId: productId },
    }"
  >
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="500px" :src="imgSrc">
        <v-card-title class="blue darken-2">{{ title }}</v-card-title>
      </v-img>

      <!-- <v-card-subtitle class="pb-0">{{ title }}</v-card-subtitle> -->

      <v-card-text class="text--primary">
        {{ description }}
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          :to="{
            name: 'Product',
            query: { productName: productName, productId: productId },
          }"
          text
        >
          View Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['shopData']),
    products() {
      if (!this.productName) {
        return this.$_.find(this.shopData, (product) => {
          return product.productId === this.productId
        })
      } else {
        return this.$_.filter(this.shopData, (product) => {
          return product.category === this.productName
        })
      }
    },
    imgSrc() {
      if (!this.productName) {
        return this.products.images[0]
      } else {
        return this.products[0].images[0]
      }
    },
    title() {
      if (!this.productName) {
        return this.products.productName
      } else {
        return this.products[0].productName
      }
    },
    description() {
      if (!this.productName) {
        return this.products.description
      } else {
        return this.products[0].description
      }
    },
  },
  props: {
    productName: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
a:link {
  text-decoration: none;
}
</style>
