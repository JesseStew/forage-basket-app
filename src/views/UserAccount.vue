<template>
  <div class="user-account container">
    <h2 class="title">My Account, {{ $store.state.user.email }}</h2>
    <button class="sign-out" @click="signOut">Sign Out</button>
    <!-- User not signed in -->
    <LoginAccount />
    <RegisterAccount />
    <!-- User Signed In -->
    <div class="user-account">
      <!-- Display if Logged In -->
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
    // displayName: function() {
    //   return this.$store.state.user.displayName
    // },
    // email: function() {
    //   return this.$store.state.email
    // },
    // emailVerified: function() {
    //   return this.$store.state.emailVerified
    // },
    // photoURL: function() {
    //   return this.$store.state.photoURL
    // },
    // isAnonymous: function() {
    //   return this.$store.state.isAnonymous
    // },
    // uid: function() {
    //   return this.$store.state.uid
    // },
    // providerData: function() {
    //   return this.$store.state.providerData
    // },
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
