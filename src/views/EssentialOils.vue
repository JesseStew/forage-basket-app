<template>
  <div class="essential-oils">
    <v-content>
      <v-row>
        <v-col>
          <h1>
            Essential Oils
          </h1>
          <h2>
            (Understanding the truth behind the industry.)
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <quill-editor
            :id="'tDhzBy3fCr697TBDYhzY'"
            :delta="getDelta('tDhzBy3fCr697TBDYhzY')"
            :key="componentKey"
            :collection="'essentialoils'"
            :action="'loadEssentialOilData'"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <img
            style="max-width:100%"
            src="https://firebasestorage.googleapis.com/v0/b/forage-basket-7a7ed.appspot.com/o/peppermint-compair.jpg?alt=media&token=1479a8a9-83d0-4922-ae9e-8cc9291e9b5e"
            alt=""
          />
        </v-col>
        <v-col cols="12" md="6">
          <quill-editor
            :id="'2s8TumNFmKqRcqr8RTxQ'"
            :delta="getDelta('2s8TumNFmKqRcqr8RTxQ')"
            :key="componentKey"
            :collection="'essentialoils'"
            :action="'loadEssentialOilData'"/>
        </v-col>
      </v-row>
      <v-row>
          <quill-editor
            :id="'ueZxjVG1LMZ15d8Nfo3l'"
            :delta="getDelta('ueZxjVG1LMZ15d8Nfo3l')"
            :key="componentKey"
            :collection="'essentialoils'"
            :action="'loadEssentialOilData'"/>
      </v-row>
      <v-row>
        <v-col
          class="text-center"
          cols="12"
          md="6"
          v-for="item in essentialOilArticle"
          :key="item.id"
        >
          <v-btn
            :to="{
              name: 'Essential Oils Article',
              query: { articleTitle: item.data.title },
            }"
          >
            {{ item.data.title }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="12" md="6">
          <v-btn
            x-large
            class="text-center"
            :to="{
              name: 'Product Category',
              query: { productCategory: 'essentialOilSingles' },
            }"
          >
            Shop Essential Oil <br />
            Singles
          </v-btn>
        </v-col>
        <v-col class="text-center" cols="12" md="6">
          <v-btn
            x-large
            class="text-center"
            :to="{
              name: 'Product Category',
              query: { productCategory: 'essentialOilBlends' },
            }"
          >
            Shop Essential Oil <br />
            Blends
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="12">
          <quill-editor
            :id="'G1d9MtopVU0ZZuii91h0'"
            :delta="getDelta('G1d9MtopVU0ZZuii91h0')"
            :key="componentKey"
            :collection="'essentialoils'"
            :action="'loadEssentialOilData'"/>
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
    ...mapState(['essentialOilData', 'essentialOilDataLoaded']),
    essentialOilArticle(){
      return this.$_.filter(this.essentialOilData, (obj) => {
        return obj.data.isArticle
      })
    }
  },
  methods: {
    openNewTab(link) {
      window.open(link.toString())
    },
    truncate(text) {
      return this.$_.truncate(text)
    },
    getDelta(id){
      console.log(this.$_.find(this.essentialOilData, (obj)=>{
        return obj.id === id
      }).data.delta)
      return this.$_.find(this.essentialOilData, (obj)=>{
        return obj.id === id
      }).data.delta
    }
  },
  created() {
    if (!this.essentialOilDataLoaded) {
      console.log('loading this.essentialOilData')
      this.$store.dispatch('loadEssentialOilData')
    }
    console.log(this.essentialOilData)
  },
}
</script>