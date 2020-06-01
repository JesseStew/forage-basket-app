<template>
  <div>
    <label>Card</label>
    <div id="card-element"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stripeAPIToken: 'pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ',
      stripe: '',
      elements: '',
      card: '',
    }
  },
  methods: {
    /*
        Includes Stripe.js dynamically
    */
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
    configureStripe() {
      this.stripe = Stripe(this.stripeAPIToken)

      this.elements = this.stripe.elements()
      this.card = this.elements.create('card')

      this.card.mount('#card-element')
    },
  },
  mounted() {
    this.includeStripe(
      'js.stripe.com/v3/',
      function() {
        this.configureStripe()
      }.bind(this)
    )
  },
}
</script>

<style scoped></style>
