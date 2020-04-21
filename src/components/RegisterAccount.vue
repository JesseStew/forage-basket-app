<template>
  <div class="sign-up">
    <h3>Let's create a new account</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="registerAccount">Create An Account</button>
  </div>
</template>

<script>
// https://firebase.google.com/docs/auth/web/password-auth?authuser=1
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'RegisterAccount',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    registerAccount: function() {
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
