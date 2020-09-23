<template>
  <v-container>
    <v-row v-if="user.email" align="center" justify="space-around">
      <v-col class="text-left pr-5" cols="6">
        <h2 class="title text-uppercase">{{ user.email }}</h2>
      </v-col>
      <v-col class="text-right pr-5" cols="6">
        <v-btn @click="signOut">
          Sign Out
        </v-btn>
      </v-col>
      <v-col cols="12">
        <user-affiliate></user-affiliate>
      </v-col>
      <v-col v-if="user.isAdmin">
        <create-admin></create-admin>
      </v-col>
    </v-row>
    <v-row v-if="!user.email">
      <v-col cols="12">
        <h1 class="display-1">
          Login / Register
        </h1>
      </v-col>
      <v-row align="center" justify="space-around">
        <v-col align-self="center" cols="12" md="6">
          <LoginAccount />
        </v-col>
        <v-col align-self="center" cols="12" md="6">
          <RegisterAccount />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import RegisterAccount from '@/components/RegisterAccount.vue'
import LoginAccount from '@/components/LoginAccount.vue'
import CreateAdmin from '@/components/CreateAdmin.vue'
import UserAffiliate from '@/components/UserAffiliate.vue'
import { mapState } from 'vuex'

export default {
  name: 'UserAccount',
  data() {
    return {}
  },
	mounted() {
		window.scrollTo(0,0)
	},
  components: {
    RegisterAccount,
    LoginAccount,
    CreateAdmin,
    UserAffiliate,
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    loggedIn() {
      this.$store.dispatch('loggedIn')
    },
    signOut() {
      this.$store.dispatch('signOut')
    },
  },
  mounted() {
    this.$store.dispatch('loggedIn')
  },
}
</script>

<style scoped></style>
