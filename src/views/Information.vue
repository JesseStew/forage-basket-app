<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>
          Shiaqga Ingredients and Facts<br />
          <i>How it works!</i>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" cols="12" md="4">
        <img
          src="../assets/images/shiaqga-green.png"
          alt="shiaqga-bottle-green"
        />
      </v-col>
      <v-col cols="12" md="8">
        <quill-editor
          :id="'5w7KkIXETJtuaW4ZdxWI'"
          :delta="getDelta('5w7KkIXETJtuaW4ZdxWI')"
          :key="componentKey"
          :collection="'information'"
          :action="'loadInformationData'"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <quill-editor
          :id="'oroHBBIxsxAqBEy43GnI'"
          :delta="getDelta('oroHBBIxsxAqBEy43GnI')"
          :key="componentKey"
          :collection="'information'"
          :action="'loadInformationData'"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6"
        class="text-center"
        v-for="item in informationArticle"
        :key="item.id"
      >
        <v-btn v-if="item.data.link" @click="openNewTab(item.data.link)">
          {{ truncate(item.data.title) }}
        </v-btn>
        <v-btn
          v-else
          :to="{
            name: 'Information Article',
            query: { articleTitle: item.data.title },
          }"
        >
          {{ truncate(item.data.title) }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <quill-editor
          :id="'Mv4IOELMVOKIPzUPa32B'"
          :delta="getDelta('Mv4IOELMVOKIPzUPa32B')"
          :key="componentKey"
          :collection="'information'"
          :action="'loadInformationData'"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuillEditor from '@/components/QuillEditor.vue'
import InformationLink from '@/components/InformationLink.vue'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      componentKey: 0,
    }
  },
  components: {
    InformationLink,
    QuillEditor
  },
  computed: {
    ...mapState(['informationData', 'informationDataLoaded']),
    informationArticle(){
      return this.$_.filter(this.informationData, (obj) => {
        return obj.data.isArticle
      })
    }
  },
	mounted() {
		window.scrollTo(0,0)
	},
  methods: {
    openNewTab(link) {
      window.open(link.toString())
    },
    truncate(text) {
      return this.$_.truncate(text)
    },
    getDelta(id){
      console.log(this.$_.find(this.informationData, (obj)=>{
        return obj.id === id
      }).data.delta)
      return this.$_.find(this.informationData, (obj)=>{
        return obj.id === id
      }).data.delta
    }
  },
  created() {
    if (!this.informationDataLoaded) {
      console.log('loading this.shopData')
      this.$store.dispatch('loadInformationData')
    }
    console.log(this.informationData)
  },
}
</script>
