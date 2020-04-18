<template>
  <div class="login">
    <CreateAccount />
    <LoginAccount />
    <!-- <h1>This is the Login page</h1> -->
  </div>
</template>

<script>
import CreateAccount from '@/components/CreateAccount.vue'
import LoginAccount from '@/components/LoginAccount.vue'

export default {
  components: {
    CreateAccount,
    LoginAccount,
  },
}
</script>

<style scoped></style>
