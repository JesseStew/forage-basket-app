<template>
  <v-containter>
    <v-row>
      <v-col cols="12">
        <h2>
          {{ title }}
        </h2>
      </v-col>
      <v-col cols="12">
        <img height="370" :src="imgSrc" />
      </v-col>
      <v-col cols="12">
        <p>
          {{ text }}
        </p>
      </v-col>
      <v-col cols="12">
        <v-btn
          :to="{
            name: 'Product',
            params: { id: productId },
            query: { priceId: priceId },
          }"
        >
          View Details
        </v-btn>
      </v-col>
    </v-row>
  </v-containter>
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

<style scoped></style>
