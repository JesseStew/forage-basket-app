<template>
  <v-app>
    <UserAccount />
  </v-app>
</template>

<script>
import UserAccount from './components/UserAccount'

export default {
  name: 'App',

  components: {
    UserAccount,
  },

  data: () => ({
    showPassword: false,
  }),
}
</script>
