<template>
  <div class="testimonies">
    <v-container>
      <v-row align="center">
        <v-col :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
          <h1>Customer Testimonies</h1>
          <h3>
            (More testimonials can be found in "Shop" and under the individual
            products.)
          </h3>
        </v-col>
      </v-row>
      <v-row v-for="document in documents" :key="document.id">
        <v-col>
          <h2 class="title">
            {{ document.name }} from {{ document.location }}
          </h2>
          <p v-for="p in document.content">
            {{ p }}
          </p>
          <v-row v-if="document.photoUrls">
            <v-col v-for="photoUrl in document.photoUrls" :key="photoUrl.id">
              <img height="300" width="300" :src="photoUrl" alt="" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="outline">
        <p>
          Please share with us your own experiences, we love to hear and it
          assists us all learn more every day.
        </p>
        <p>
          Each story will be read in full with great care. If you prefer us to
          kept your experience private, let us know. We will always respect your
          personal wishes. Thank You!
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['testimonyData', 'testimonyDataLoaded']),
    documents() {
      return this.$_.orderBy(this.testimonyData, ['order'])
    },
  },
  created() {
    if (!this.testimonyDataLoaded) {
      console.log('loading this.testimonyData')
      this.$store.dispatch('loadTestimonyData')
    }
  },
}
</script>

<style scoped></style>
