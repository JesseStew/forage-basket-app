<template>
  <v-container class="product">
    <p>
      {{ test }}
    </p>
    <p>
      {{ test2 }}
    </p>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>
          {{ productTitle }}
        </h1>
      </v-col>
      <v-col cols="12">
        <div v-for="image in images" :key="image.id">
          <img :src="image" />
        </div>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="selectedProductDescription"
          :items="productsArray"
          label="Select Product"
          item-text="description"
        >
        </v-select>
      </v-col>
      <v-col class="text-right" cols="6">
        <p class="pt-5">${{ selectedProductPrice * quantity }}</p>
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
        <v-btn @click="addToCart()">
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
import { mapState } from 'vuex'

export default {
  name: 'Product',
  data: function() {
    return {
      active: false,
      productName: '',
      quantity: 1,
      productLoaded: false,
      priceLoaded: false,
      selectedProductDescription: {},
    }
  },
  computed: {
    ...mapState(['shopData']),
    productsArray() {
      return this.shopData[this.productName].properties
    },
    test() {
      return this.shopData[this.productName].properties[0]
    },
    test2() {
      return this.$_.find(this.productsArray, (o) => {
        return this.selectedProductDescription === o.description
      })
    },
    selectedProduct() {
      console.log(
        this.$_.find(this.productsArray, (o) => {
          return this.selectedProductDescription === o.description
        })
      )
      return this.$_.find(this.productsArray, (o) => {
        return this.selectedProductDescription === o.description
      })
    },
    selectedProductPrice() {
      if (this.selectedProduct) {
        return (this.selectedProduct.price.unit_amount / 100).toFixed(2)
      } else {
        return (0).toFixed(2)
      }
    },
    productTitle() {
      return this.shopData[this.productName].properties[0].productName
    },
    images() {
      return this.shopData[this.productName].properties[0].images
    },
    description() {
      // Update this
      if (this.selectedProduct) {
        return this.selectedProduct.description
      } else {
        return this.shopData[this.productName].properties[0].description
      }
    },
    priceId() {
      if (this.selectedProduct) {
        return this.selectedProduct.priceId
      } else {
        return this.shopData[this.productName].properties[0].priceId
      }
    },
    productId() {
      if (this.selectedProduct) {
        return this.selectedProduct.productId
      } else {
        return this.shopData[this.productName].properties[0].productId
      }
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
          name: this.description,
          description: this.description,
          unitAmount: this.selectedProductPrice,
        },
      }
      this.$store.dispatch('addToCart', payload)
    },
  },
  created() {
    if (this.$route.query.productName) {
      this.productName = this.$route.query.productName
    }
  },
  mounted() {
    this.$store.dispatch('loggedIn')
  },
}

// priceId() {
//   return this.shopData[this.productName].properties[0].priceId
// },
// productId() {
//   return this.shopData[this.productName].properties[0].productId
// },
</script>

<style scoped></style>
