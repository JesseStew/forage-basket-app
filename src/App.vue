<template>
  <v-app>
    <Navigation />
    <!-- <v-content> -->
    <!-- Content Goes Here, -->
    <!-- <p>hello</p>
    </v-content> -->
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: sticky;
  top: 0;
  background-color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
