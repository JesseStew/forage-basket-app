<template>
  <div>
    <div v-if="email">
      <v-row align="center" justify="space-around">
        <v-col>
          <h2 class="title">My Account, {{ displayName }}</h2>
        </v-col>
        <v-col>
          <v-btn class="sign-out" @click="signOut">
            Sign Out
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-if="!email">
      <v-row>
        <v-col>
          <h1 class="display-1">
            Login / Register
          </h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-col align-self="center" cols="6">
          <LoginAccount />
        </v-col>
        <v-col align-self="center" cols="6">
          <RegisterAccount />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import RegisterAccount from '@/components/RegisterAccount.vue'
import LoginAccount from '@/components/LoginAccount.vue'

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

<style scoped>
/* Grid Level */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1px solid #cbcbcb;
}
.title {
  grid-column: 1 / 2;
  justify-self: start;
  padding: 1em;
}
.sign-out {
  grid-column: 2 / 3;
  justify-self: end;
  margin: 1em;
}
</style>
