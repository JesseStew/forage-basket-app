<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">
          Login
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="displayName"
            prepend-icon="mdi-account-circle"
            label="Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-account-circle"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="registerAccount">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    displayName: '',
    showPassword: false,
  }),
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

<style scoped></style>
