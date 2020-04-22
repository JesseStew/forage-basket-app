<template>
  <div class="user-account">
    <h2>My Account {{ displayName }}</h2>
    <button @click="signOut">Sign Out</button>
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
// https://firebase.google.com/docs/auth/web/password-auth?authuser=1
import firebase from 'firebase/app'
import 'firebase/auth'

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
    displayName: function() {
      return this.$store.state.displayName
    },
    email: function() {
      return this.$store.state.email
    },
    emailVerified: function() {
      return this.$store.state.emailVerified
    },
    photoURL: function() {
      return this.$store.state.photoURL
    },
    isAnonymous: function() {
      return this.$store.state.isAnonymous
    },
    uid: function() {
      return this.$store.state.uid
    },
    providerData: function() {
      return this.$store.state.providerData
    },
  },
  methods: {
    loggedIn() {
      this.$store.commit('loggedIn')
    },
    signOut() {
      this.$store.commit('signOut')
    },
  },
  mounted() {
    this.$store.commit('loggedIn')
  },
}
</script>

<style scoped></style>
