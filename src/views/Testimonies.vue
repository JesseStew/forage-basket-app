<template>
  <div class="testimonies">
    <h1>This is the Testimonies page</h1>
    <div v-for="document in documents" :key="document.id">
      <h2 class="title">{{ document.name }} from {{ document.location }}</h2>
      <p v-for="p in document.content">
        {{ p }}
      </p>
      <div v-if="document.photoUrls">
        <SlideShow :sources="document.photoUrls" />
      </div>
    </div>
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
  </div>
</template>

<script>
import SlideShow from '@/components/SlideShow.vue'

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
db.settings = { timestampsInSnapshots: true }

export default {
  data() {
    return {
      documents: [],
    }
  },
  methods: {},
  firestore: {
    documents: db.collection('testimonies').orderBy('order'),
  },
  components: {
    SlideShow,
  },
  computed: {},
}
</script>

<style scoped>
.testimonies {
  text-align: left;
  margin: 2em;
}
.testimonies h1 {
  text-align: center;
  margin: 2em;
}
.outline {
  border-top: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
  padding: 1.5em;
  text-align: center;
}
</style>
