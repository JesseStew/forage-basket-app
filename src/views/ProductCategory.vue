<template>
  <v-container>
    <!-- <v-row>
      <v-col cols="4" v-for="product in products" :key="product.id">
        {{ product }}
        <ProductLink :productName
      </v-col>
    </v-row>
    <p>
      {{ productCategory }}
    </p> -->
  </v-container>
</template>

<script>
import ProductLink from '@/components/ProductLink.vue'
import { mapState } from 'vuex'

export default {
  // data() {
  //   return {
  //     productCategory: undefined,
  //   }
  // },
  // computed: {
  //   ...mapState(['shopData']),
  //   products() {
  //     return this.shopData[this.productCategory].properties
  //   },
  // },
  // components: {
  //   ProductLink,
  // },
  // created() {
  //   if (this.$route.query.productCategory) {
  //     this.productCategory = this.$route.query.productCategory
  //   }
  // },
}
</script>

<style scoped></style>
