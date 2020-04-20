<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Connection</button>
    <!-- <h1>This is the Login page</h1> -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  widows: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
