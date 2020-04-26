<template>
  <div class="add-testimony">
    <form>
      <input v-model="name" type="text" placeholder="Name" />
      <input
        v-model="location"
        type="text"
        name="Location"
        placeholder="Location"
      />
      <input
        v-model="testimony"
        type="text"
        name="testimony"
        placeholder="testimony"
      />
      <button @click="addTestimony">Add testimony</button>
    </form>
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
      location: '',
      name: '',
      testimony: '',
    }
  },
  methods: {
    addTestimony() {
      db.collection('testimonies').add({
        name: this.name,
        location: this.location,
        testimony: this.testimony,
      })
    },
  },
}
</script>

<style scoped></style>
