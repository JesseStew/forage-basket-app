<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>{{ document.title }}</h2>
        <h3 v-if="document.author">by {{ document.author }}</h3>
        <div
          v-for="element in orderElements(document.elements)"
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
      <!-- <v-col>
        {{ article }}
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      articleLinkText: undefined,
    }
  },
  computed: {
    document() {
      let informationData = this.$store.state.informationData
      return this.$_.find(informationData, (item) => {
        return item.linkText === this.articleLinkText
      })
    },
  },
  created() {
    if (!this.$store.state.informationDataLoaded) {
      console.log('loading this.shopData')
      this.$store.dispatch('loadInformationData')
    }
    if (this.$route.query.articleLinkText) {
      this.articleLinkText = this.$route.query.articleLinkText
    }
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
