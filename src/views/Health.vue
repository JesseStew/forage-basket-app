<template>
  <v-container>
    <v-row>
      <v-col>
        <p>
          Click the headings below to read more. If you wish to know information
          on a specific health condition and an alternative treatment, please
          contact us with your request. We will pass your request on to a
          competent natural health professional.
        </p>
        <v-expansion-panels popout>
          <!-- here, fix order -->
          <InformationLink
            v-for="document in healthData"
            :key="document.id"
            :document="document"
          />
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InformationLink from '@/components/InformationLink.vue'
import { mapState, mapActions } from 'vuex'

import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

export default {
  data() {
    return {
      documents: [],
    }
  },
  props: {
    document: {
      type: Object,
    },
  },
  computed: {
    ...mapState(['healthData']),
    currentRouteName() {
      return this.$route.name
    },
  },
  methods: {
    displayInfo() {
      return (this.display = !this.display)
    },
    openNewTab(link) {
      window.open(link.toString())
    },
    isUl(index) {
      let regex = RegExp('ul$')
      return regex.test(index)
    },
    orderElements(elements) {
      return this.$_.orderBy(elements, 'order')
    },
  },
  firestore: {
    documents: db.collection('health').orderBy('order'),
  },
  components: {
    InformationLink,
  },
  created() {
    this.$store.dispatch('loadHealthData')
  },
}
</script>

<style scoped>
blockquote {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 40px;
  padding-right: 40px;
  font-style: italic;
}
.image {
  width: 100%;
  height: auto;
}
</style>
