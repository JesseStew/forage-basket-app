<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="login">Sign In</button>
  </div>
</template>

<script>
// https://firebase.google.com/docs/auth/web/password-auth?authuser=1
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'LoginAccount',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          alert('You have logged in.')
        })
        .catch(function(err) {
          alert('Loggin failure.')
        })
    },
  },
}
</script>

<style scoped></style>
