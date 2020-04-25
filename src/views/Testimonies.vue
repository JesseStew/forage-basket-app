<template>
  <div class="testimonies">
    <h1>This is the Testimonies page</h1>
    <button @click="getDocRefs"></button>
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
      author: '',
      content: '',
      credentials: '',
      title: '',
      docRefs: [],
    }
  },
  methods: {
    getDocRefs() {
      db.collection('testimonies')
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log(doc.data())
          })
        })
    },
  },
}
</script>
