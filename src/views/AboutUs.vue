<template>
  <div>
    <v-content>
      <v-row>
        <v-col class="text-center pt-10">
          <h1>
            About Us
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <quill-editor
            :id="'ka90vz2T1UVvxh6nonCE'"
            :delta="getDelta('ka90vz2T1UVvxh6nonCE')"
            :key="componentKey"
            :collection="'about'"
            :action="'loadAboutData'"/>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
import QuillEditor from '@/components/QuillEditor.vue'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      componentKey: 0,
    }
  },
  components: {
    QuillEditor
  },
  computed: {
    ...mapState(['aboutData', 'aboutDataLoaded']),
  },
  methods: {
    openNewTab(link) {
      window.open(link.toString())
    },
    truncate(text) {
      return this.$_.truncate(text)
    },
    getDelta(id){
      console.log(this.$_.find(this.aboutData, (obj)=>{
        return obj.id === id
      }).data.delta)
      return this.$_.find(this.aboutData, (obj)=>{
        return obj.id === id
      }).data.delta
    }
  },
	mounted() {
		window.scrollTo(0,0)
	},
  created() {
    if (!this.aboutDataLoaded) {
      console.log('loading this.aboutData')
      this.$store.dispatch('loadAboutData')
    }
    console.log(this.aboutData)
  },
}
</script>