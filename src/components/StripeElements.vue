<template>
  <div>
    <h2>Stripe Form</h2>

    <label for="card-number">
      Credit or Debit Card
    </label>
    <div id="card-number">
      <!-- Stripe Element -->
    </div>

    <label for="card-cvc">
      CVC
    </label>
    <div id="card-cvc">
      <!-- Stripe Element -->
    </div>

    <label for="card-exp">
      EXP
    </label>
    <div id="card-exp">
      <!-- Stripe Element -->
    </div>

    <v-btn @click="submitNewCharge">Submit Payment</v-btn>
  </div>
</template>

<script>
import { DB } from '../firebase/db'

export default {
  data() {
    return {
      stripeAPIToken: 'pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ',
      stripe: '',
      elements: '',
      card: '',
      cvc: '',
      exp: '',
      style: {
        base: {
          color: '#32325d',
        },
      },
      newCharge: {
        source: null,
        amount: 2000,
      },
      newCreditCard: {
        number: '4242424242424242',
        cvc: '111',
        exp_month: 1,
        exp_year: 2020,
        address_zip: '00000',
      },
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

      this.card = this.elements.create('cardNumber', { style: this.style })
      this.card.mount('#card-number')

      this.cvc = this.elements.create('cardCvc', { style: this.style })
      this.cvc.mount('#card-cvc')

      this.exp = this.elements.create('cardExpiry', { style: this.style })
      this.exp.mount('#card-exp')
    },
    submitNewCharge: function() {
      DB.collection('user')
        .doc(this.currentUser.uid)
        .collection('stripe')
        .doc('charges')
        .add({
          source: this.newCharge.source,
          amount: parseInt(this.newCharge.amount),
        })
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

<style scoped>
input,
.StripeElement {
  height: 40px;
  padding: 10px 12px;

  color: #32325d;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

input:focus,
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
