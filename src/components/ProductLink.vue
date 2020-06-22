<template>
  <router-link
    :to="{
      name: 'Product',
      params: { id: productId },
      query: { priceId: priceId },
    }"
  >
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="500px" :src="imgSrc">
        <v-card-title class="blue darken-2">{{ title }}</v-card-title>
      </v-img>

      <!-- <v-card-subtitle class="pb-0">{{ title }}</v-card-subtitle> -->

      <v-card-text class="text--primary">
        {{ text }}
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          :to="{
            name: 'Product',
            params: { id: productId },
            query: { priceId: priceId },
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
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    priceId: {
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
