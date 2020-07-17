<template>
  <v-container>
    <v-row v-if="email" align="center" justify="space-around">
      <v-col>
        <h2 class="title">My Account, {{ displayName }}</h2>
      </v-col>
      <v-col>
        <v-btn @click="signOut">
          Sign Out
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!email">
      <v-col cols="12">
        <h1 class="display-1">
          Login / Register
        </h1>
      </v-col>
      <v-row align="center" justify="space-around">
        <v-col align-self="center" cols="12" md="6">
          <LoginAccount />
        </v-col>
        <v-col align-self="center" cols="12" md="6">
          <RegisterAccount />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import RegisterAccount from '@/components/RegisterAccount.vue'
import LoginAccount from '@/components/LoginAccount.vue'
// import StripeElements from '@/components/StripeElements.vue'

export default {
  name: 'UserAccount',
  data() {
    return {}
  },
  components: {
    RegisterAccount,
    LoginAccount,
  },
  computed: {
    email: function() {
      return this.$store.state.user.email
    },
    displayName: function() {
      return this.$store.state.user.displayName
    },
  },
  methods: {
    loggedIn() {
      this.$store.dispatch('loggedIn')
    },
    signOut() {
      this.$store.dispatch('signOut')
    },
  },
  mounted() {
    this.$store.dispatch('loggedIn')
  },
}
</script>

<style scoped></style>
