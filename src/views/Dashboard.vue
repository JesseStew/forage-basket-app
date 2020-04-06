<template>
  <div id="dashboard">
    <h1>Dashboard</h1>
    <template v-if="!isLoading"> </template>
    <!-- <h1>{{ user.name }}'s Account</h1> -->
  </div>
</template>

<script>
import axios from 'axios'
import OrderHistory from '../components/OrderHistory.vue'

export default {
  components: { OrderHistory },
  data() {
    return {
      isLoading: true,
      orders: [],
    }
  },
  created() {
    axios.get('//localhost:3000/dashboard').then(({ data }) => {
      this.orders = data.events.orders
      this.isLoading = false
    })
  },
}
</script>

<style></style>
