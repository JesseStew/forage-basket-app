<template>
  <v-app>
    <v-container>
      <Navigation />
      <router-view />
      <BaseFooter />
    </v-container>
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
</style>
