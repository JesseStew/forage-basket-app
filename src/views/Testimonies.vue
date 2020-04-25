<template>
  <div class="testimonies">
    <h1>This is the Testimonies page</h1>
    <button @click="getData"></button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
var db = firebase.firestore()
export default {
  data() {
    return {
      author: '',
      content: '',
      credentials: '',
      title: '',
    }
  },
  methods: {
    getData() {
      db.collection('testimonies')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`)
          })
        })
    },
  },
}
</script>
