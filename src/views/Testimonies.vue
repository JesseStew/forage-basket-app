<template>
  <div class="testimonies">
    <h1>This is the Testimonies page</h1>
    <div v-for="snapshot in snapshots" :key="snapshot.id">
      <TestimonyItem :snapshot="snapshot" />
    </div>
    <button @click="getDocRefs"></button>
  </div>
</template>

<script>
import TestimonyItem from '@/components/TestimonyItem.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
db.settings = { timestampsInSnapshots: true }

export default {
  data() {
    return {
      snapshots: [],
    }
  },
  methods: {
    getDocRefs() {
      db.collection('testimonies')
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.snapshots.push(doc)
          })
        })
    },
  },
  components: {
    TestimonyItem,
  },
}
</script>
