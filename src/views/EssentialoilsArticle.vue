<template>
  <v-container>
    <v-row>
      <v-col v-if="!document.data.link">
        <quill-editor
          :id="document.id"
          :delta="document.data.delta"
          :key="componentKey"
          :collection="'essentialoils'"
          :action="'loadEssentialOilData'"/>
      </v-col>
      <v-col v-else>
        <h2>{{ document.data.title }}</h2>
        <h3 v-if="document.data.author">by {{ document.data.author }}</h3>
        <div
          v-for="element in orderElements(document.data.elements)"
          :key="element.id"
        >
          <h3 v-if="element.element == 'h3'">
            {{ element.content }}
          </h3>
          <h3 v-if="element.title">{{ element.title }}</h3>
          <img
            class="image"
            v-if="element.element == 'img'"
            :src="element.src"
            style="max-width: 100%"
            alt=""
          />
          <v-row>
            <v-col>
              <ul v-if="element.element == 'ul'">
                <li
                  v-for="item in orderElements(element.content)"
                  :key="item.id"
                >
                  {{ item.content }}
                </li>
              </ul>
              <ol v-if="element.element == 'ol'">
                <li
                  v-for="item in orderElements(element.content)"
                  :key="item.id"
                >
                  {{ item.content }}
                </li>
              </ol>
            </v-col>
          </v-row>
          <p v-if="element.element == 'p'">{{ element.content }}</p>
          <blockquote v-if="element.element == 'blockquote'">
            {{ element.content }}
          </blockquote>
          <button
            v-if="element.element == 'link'"
            @click="openNewTab(element.link)"
          >
            <!-- here, Add local logic -->
            {{ element.linkText }}
          </button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import QuillEditor from '@/components/QuillEditor.vue';

export default {
  data() {
    return {
      articleTitle: undefined,
      componentKey: 0,
    }
  },
  components: {
    QuillEditor
  },
  computed: {
    document() {
      let essentialOilData = this.$store.state.essentialOilData
      return this.$_.find(essentialOilData, (item) => {
        return item.data.title === this.articleTitle
      })
    },
  },
  created() {
    if (!this.$store.state.essentialOilDataLoaded) {
      console.log('loading this.essentialOilData')
      this.$store.dispatch('loadEssentialOilData')
    }
    if (this.$route.query.articleTitle) {
      this.articleTitle = this.$route.query.articleTitle
    }
  },
	mounted() {
		window.scrollTo(0,0)
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
}
</script>

<style scoped></style>
