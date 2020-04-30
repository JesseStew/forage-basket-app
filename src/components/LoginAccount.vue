<template>
  <div class="login">
    <h3>DC Comics Rebirth - Covers</h3>
    <input
      type="text"
      v-model="email"
      placeholder="Email address"
      class="input"
      required
    />
    <br />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      class="input"
      required
    />
    <br />
    <button v-on:click="login" class="button">Enter</button>
    <p>
      <router-link to="/signup">
        New Here? Create a new account
      </router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('/comics')
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },
}
</script>
