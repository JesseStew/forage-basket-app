<template>
  <div class="testimonies">
    <v-container>
      <v-row align="center">
        <v-col cols="12" :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
          <h1>Customer Testimonies</h1>
          <h3>
            (Thank you to all our customers that took the time to share with us their testimonial.)
          </h3>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            label="Sort by Author"
            v-model="sortByAuthor">
          </v-checkbox>
          <v-radio-group v-if="sortByAuthor" v-model="order">
            <v-radio label="Ascending" value="asc"></v-radio>
            <v-radio label="Descending" value="desc"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="selectedConditions"
            :items="conditions"
            :chips="true"
            :multiple="true"
            label="Select Conditions">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col cols="12" v-for="testimony in testimonies" :key="componentKey">
          <quill-testimonies
            :data="testimony.data"
            :id="testimony.id"
            :collection="'testimonies'"
            :action="'loadTestimonyData'"></quill-testimonies>
        </v-col> -->
        <v-col cols="12" v-for="testimony in allTestimonies" :key="componentKey">
          <quill-testimonies
            :data="testimony.data"
            :id="testimony.id"
            :collection="'testimonies'"
            :action="'loadTestimonyData'"></quill-testimonies>
        </v-col>
        <v-col class="text-center">
          <v-btn v-if="!(length > testimonies.length)" class="mb-12" @click="addTestimonies">
            Load More Testimonies
          </v-btn>
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
import { mapState, mapActions } from 'vuex'
import QuillTestimonies from '@/components/QuillTestimonies.vue';

export default {
  data() {
    return {
      selectedConditions: [],
      length: 10,
      sortByAuthor: false,
      order: 'asc',
      componentKey: 0,
      conditions: ['arthritis', 'back', 'blood', 'blood pressure', 'breathing', 'bowels', 'broken ankle', 'bronchitis', 'cancer', 'chemotherapy side effects', 'cholesterol', 'covid-19', 'detox', 'diabetes', 'ears', 'energy', 'eyes', 'fibromyalgia', 'generic', 'heart', 'hodgkins lymphoma', 'infections', 'tumors', 'injury', 'kidney', 'libido', 'lumps', 'lyme disease', 'lymph node', 'menopause', 'menstration', 'mole or lesion', 'mono', 'multiple sclerosis', 'non-hodgkins lymphoma', 'oxygen', 'pain', 'parkinsons', 'pneumonia', 'psoriasis', 'respiratory', 'scars', 'seasonal allergies', 'shingles', 'sinuses', 'skin/hair', 'sleep', 'sores/open wound on body', 'stomach', 'thyroid', 'tonsils', 'toothache', 'tremors','viruses', 'youthful appearance'],
    }
  },
  computed: {
    ...mapState(['testimonyData', 'testimonyDataLoaded']),
    testimonies() {
      let testimonies = ''
      if (this.sortByAuthor) {
        testimonies = this.$_.orderBy(this.testimonyData, ['data.author'], [this.order])
        this.componentKey = this.componentKey + 1
        if (this.selectedConditions.length > 0) {
          testimonies = this.$_.filter(testimonies, (obj) => {
            return this.$_.intersection(obj.data.selectedConditions, this.selectedConditions).length > 0
          })
        }
      } else {
        testimonies = this.testimonyData
        this.componentKey = this.componentKey + 1
        if (this.selectedConditions.length > 0) {
          testimonies = this.$_.filter(testimonies, (obj) => {
            console.log(this.$_.intersection(obj.data.selectedConditions, this.selectedConditions))
            return this.$_.intersection(obj.data.selectedConditions, this.selectedConditions).length > 0
          })
        }
      }
      let testimoniesSlice = this.$_.slice(testimonies, 0, this.length)
      return testimoniesSlice
    },
    allTestimonies() {
      return this.$_.orderBy(this.testimonyData, ['data.author'], ['asc'])
    }
  },
  created() {
    if (!this.testimonyDataLoaded) {
      console.log('loading this.testimonyData')
      this.$store.dispatch('loadTestimonyData')
    }
    this.loggedIn()
  },
  components: {
    QuillTestimonies
  },
	mounted() {
		window.scrollTo(0,0)
	},
  methods: {
    ...mapActions(['loggedIn']),
    addTestimonies() {
      this.length = this.length + 10
    }
  }
}
</script>

<style scoped></style>
