<template>
  <div>
    <h2 class="title">
      {{ snapshot.data().name }} from {{ snapshot.data().location }}
    </h2>
    <p v-for="paragraph in paragraphs" :key="paragraph.id">
      {{ paragraph }}
    </p>
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
      paragraphs: {},
    }
  },
  props: {
    snapshot: Object,
  },
  methods: {
    getDocRefs() {
      db.collection('testimonies')
        .doc(this.snapshot.id)
        .collection('paragraphs')
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.paragraphs = doc.data()
          })
        })
    },
  },
  mounted() {
    this.getDocRefs()
  },
}
</script>

<style scoped></style>
