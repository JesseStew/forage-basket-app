<template>
  <router-link
    :to="{
      name: 'Product',
      query: { productName: productName },
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
            query: { productName: productName },
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
    imgSrc() {
      return this.shopData[this.productName].properties[0].images[0]
    },
    title() {
      return this.shopData[this.productName].properties[0].productName
    },
    description() {
      return this.shopData[this.productName].properties[0].description
    },
  },
  props: {
    productName: {
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
