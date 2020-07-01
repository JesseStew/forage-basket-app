<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>
          Health Articles
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p>
          Click the headings below to read more. If you wish to know information
          on a specific health condition and an alternative treatment, please
          contact us with your request. We will pass your request on to a
          competent natural health professional.
        </p>
      </v-col>
      <v-col
        class="text-center"
        cols="12"
        md="4"
        lg="3"
        v-for="item in healthData"
        :key="item.id"
      >
        <v-btn v-if="item.link" @click="openNewTab(document.link)">
          {{ item.linkText }}
        </v-btn>
        <v-btn
          v-else
          :to="{
            name: 'Health Article',
            query: { articleLinkText: item.linkText },
          }"
        >
          {{ item.linkText }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InformationLink from '@/components/InformationLink.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['healthData', 'healthDataLoaded']),
    currentRouteName() {
      return this.$route.name
    },
  },
  methods: {
    isUl(index) {
      let regex = RegExp('ul$')
      return regex.test(index)
    },
    orderElements(elements) {
      return this.$_.orderBy(elements, 'order')
    },
    openNewTab(link) {
      window.open(link.toString())
    },
  },
  components: {
    InformationLink,
  },
  created() {
    if (!this.healthDataLoaded) {
      console.log('loading this.healthData')
      this.$store.dispatch('loadHealthData')
    }
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
