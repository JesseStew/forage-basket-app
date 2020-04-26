<template>
  <div class="testimonies">
    <h1>This is the Testimonies page</h1>
    <div v-for="document in documents" :key="document.id">
      <h2 class="title">{{ document.name }} from {{ document.location }}</h2>
      <p v-for="p in document.content">
        {{ p }}
      </p>
    </div>
  </div>
</template>

<script>
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
}
</script>
