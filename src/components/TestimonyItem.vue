<template>
  <div>
    <div v-for="customer in customers" :key="customer.id">
      {{ customer }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
    }
  },
  firestore: {},
}
</script>

<style scoped></style>
