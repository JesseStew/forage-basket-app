<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="product in products" :key="product.id">
        <ProductLink :productName="''" :productId="product.productId">
        </ProductLink>
      </v-col>
    </v-row>
    <p>
      {{ productCategory }}
    </p>
  </v-container>
</template>

<script>
import ProductLink from '@/components/ProductLink.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      productCategory: undefined,
    }
  },
  computed: {
    ...mapState(['shopData']),
    products() {
      return this.$_.filter(this.shopData, (product) => {
        return product.category === this.productCategory
      })
    },
  },
  components: {
    ProductLink,
  },
  created() {
    if (this.$route.query.productCategory) {
      this.productCategory = this.$route.query.productCategory
    }
  },
}
</script>

<style scoped></style>
