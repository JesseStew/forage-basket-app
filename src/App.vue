<template>
  <v-app>
    <v-container>
      <Navigation />
      <router-view />
      <v-footer absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">
          Copyright 2018 - 2019 All Rights Reserved. Selected content copyright
          and trademark respective companies, used with permission.
        </v-col>
      </v-footer>
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
