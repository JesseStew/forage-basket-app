<template>
  <div class="sign-up">
    <h3>Create a new account</h3>
    <input
      v-model="email"
      type="text"
      class="input"
      placeholder="Email"
      required
    />
    <br />
    <input
      v-model="password"
      type="password"
      class="input"
      placeholder="Password"
      required
    />
    <br />
    <input
      v-model="displayName"
      type="text"
      class="input"
      placeholder="Full Name"
      required
    />
    <br />
    <button v-on:click="registerAccount" class="button">Sign Up!</button>
    <button class="button">
      <router-link to="/login">
        Back
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
      displayName: '',
    }
  },
  methods: {
    registerAccount() {
      this.$store.dispatch('registerAccount', {
        email: this.email,
        password: this.password,
        displayName: this.displayName,
      })
    },
  },
}
</script>
