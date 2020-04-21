<template>
  <div class="user-account">
    <h2>My Account {{ displayName }}</h2>
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
    return {
      email: '',
      emailVerified: '',
      photoURL: '',
      isAnonymous: '',
      uid: '',
      providerData: '',
    }
  },
  methods: {
    loggedIn: function() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.displayName = user.displayName
          this.email = user.email
          this.emailVerified = user.emailVerified
          this.photoURL = user.photoURL
          this.isAnonymous = user.isAnonymous
          this.uid = user.uid
          this.providerData = user.providerData
          console.log(this.email)
          alert('User Logged in.')
        }
      })
    },
  },
  components: {
    RegisterAccount,
    LoginAccount,
  },
  beforeMount() {
    this.loggedIn()
  },
  computed: {
    displayName() {
      return this.$store.state.user.displayName
    },
  },
}
</script>

<style scoped></style>
