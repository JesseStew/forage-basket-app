<template>
  <div class="product">
    <h1>
      {{ name }}
    </h1>
    <div v-for="image in images" :key="image.id">
      <img :src="image" />
    </div>
    <p>
      {{ description }}
    </p>

    <v-btn @click="getStripeProduct">
      Get Product
    </v-btn>
    <!-- <product-review @review-submitted="addReview"></product-review> -->
  </div>
</template>

<script>
import http from '../http-common'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

export default {
  name: 'Product',
  data: function() {
    return {
      stripeAPIToken: 'pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ',
      errorMessage: null,
      stripe: '',
      active: false,
      images: [],
      name: '',
      description: '',
    }
  },
  methods: {
    includeStripe(URL, callback) {
      let documentTag = document,
        tag = 'script',
        object = documentTag.createElement(tag),
        scriptTag = documentTag.getElementsByTagName(tag)[0]
      object.src = '//' + URL
      if (callback) {
        object.addEventListener(
          'load',
          function(e) {
            callback(null, e)
          },
          false
        )
      }
      scriptTag.parentNode.insertBefore(object, scriptTag)
    },
    async getStripeProduct() {
      http
        .get('widgets/getStripeProduct/' + this.productId)
        .then((res) => {
          console.log('res: ', res)
          this.active = res.data.active
          this.images = res.data.images
          this.name = res.data.name
          this.description = res.data.description
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  },
  computed: {},
  created() {
    this.productId = this.$route.params.id
  },
  mounted() {
    this.includeStripe(
      'js.stripe.com/v3/',
      function() {
        this.configureStripe()
      }.bind(this)
    )
    this.getStripeProduct()
  },
}
</script>

<style scoped></style>
