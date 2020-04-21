<template>
  <div class="user-account">
    <h2>My Account</h2>
    <!-- User not signed in -->
    <!-- <div class="sign-in">
      <h3>Sign In</h3>
      <input type="text" placeholder="Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <button>Sign In</button>
    </div> -->
    <div class="sign-up">
      <h3>Let's create a new account</h3>
      <input type="text" v-model="email" placeholder="Email" /><br />
      <input type="password" v-model="password" placeholder="Password" /><br />
      <button @click="signUp">Create An Account</button>
    </div>
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

export default {
  name: 'UserAccount',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          console.log(user)
          alert('Your account has been created')
        })
        .catch(function(err) {
          alert('Did not create account')
        })
    },
  },
}
</script>

<style scoped></style>
