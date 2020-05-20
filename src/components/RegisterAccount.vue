<template>
  <v-card class="mx-5">
    <v-card-title>
      <h1 class="display-1">
        Register
      </h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="displayName"
          prepend-icon="mdi-account-circle"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="displayName"
          prepend-icon="mdi-account-circle"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="displayName"
          prepend-icon="mdi-account-circle"
          label="Username"
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
    <v-row>
      <v-col>
        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn @click="registerAccount">Register</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
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
    registerAccount() {
      this.$store.dispatch('registerAccount', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
