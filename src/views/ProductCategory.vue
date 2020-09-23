<template>
  <v-container>
    <v-row>
      <v-col
        v-if="shopDataLoaded"
        cols="12"
        md="4"
        v-for="product in products"
        :key="product.id"
      >
        <ProductLink :productName="''" :productId="product.productId">
        </ProductLink>
      </v-col>
    </v-row>
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
    ...mapState(['shopData', 'shopDataLoaded']),
    products() {
      return this.$_.filter(this.shopData, (product) => {
        return product.category === this.productCategory
      })
    },
  },
  components: {
    ProductLink,
  },
	mounted() {
		window.scrollTo(0,0)
	},
  created() {
    if (this.$route.query.productCategory) {
      this.productCategory = this.$route.query.productCategory
    }
    if (!this.shopDataLoaded) {
      console.log('loading this.shopData')
      this.$store.dispatch('loadShopData')
    }
  },
}
</script>

<style scoped></style>
