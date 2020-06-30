<template>
  <div class="product">
    <h1 v-if="cart.length > 0">
      Items in Cart
    </h1>
    <h1 v-else>
      Cart is Empty
    </h1>
    <v-data-table :headers="headers" :items="cart">
      <template #item.unitAmount="{item}">
        ${{ item.product.unitAmount }}
      </template>

      <template #item.quantity="{item}">
        <v-text-field
          v-model="item.quantity"
          type="number"
          min="0"
          style="max-width: 15%"
        ></v-text-field>
      </template>

      <template #item.total="{item}">
        ${{ (item.quantity * item.product.unitAmount).toFixed(2) }}
      </template>

      <template #item.remove="{item}">
        <v-btn @click="removeFromCart(item.product)" text icon>
          <v-icon>
            mdi-close-circle-outline
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-btn v-if="cart.length > 0" @click="checkout()">
      Buy Items in Cart
    </v-btn>
  </div>
</template>

<script>
import http from '../http-common'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapState, mapActions } from 'vuex'

import ProductLink from '@/components/ProductLink.vue'

export default {
  name: 'Cart',
  data: function() {
    return {
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
          value: 'unitAmount',
          sortable: false,
        },
        {
          text: 'Quantity',
          align: 'start',
          value: 'quantity',
          sortable: false,
        },
        {
          text: 'Total',
          align: 'start',
          value: 'total',
          sortable: false,
        },
        {
          text: '',
          align: 'start',
          value: 'remove',
          sortable: false,
        },
      ],
    }
  },
  computed: {
    ...mapState(['cart', 'user']),
  },
  methods: {
    ...mapActions(['checkout', 'loggedIn', 'removeFromCart']),
  },
  created() {
    this.productId = this.$route.params.id
    if (this.$route.query.priceId) {
      this.priceId = this.$route.query.priceId
    }
  },
  mounted() {
    this.loggedIn()
  },
  components: {
    ProductLink,
  },
}
</script>

<style scoped></style>
