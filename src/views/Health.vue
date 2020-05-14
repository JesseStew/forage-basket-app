<template>
  <div class="health">
    <v-container>
      <v-row v-for="document in documents" :key="document.id">
        <!-- {{ document }} -->
        <v-col>
          <h2>{{ document.title }}</h2>
          <h3 v-if="document.author">by {{ document.author }}</h3>
        </v-col>
        <!-- here, order -->
        <v-row v-for="element in document.elements" :key="element.id">
          <v-col>
            {{ element.element }}
            <h3 v-if="element.element == 'h3'">
              {{ element.content }} {{ element.order }}
            </h3>
            <p v-if="element.element == 'p'">
              {{ element.content }} {{ element.order }}
            </p>
            <ol v-if="element.element == 'ol'">
              {{
                element.order
              }}
              <li v-for="el in element.content">
                {{ el.content }}
              </li>
            </ol>
            <ul v-if="element.element == 'ul'">
              {{
                element.order
              }}
              <li v-for="el in element.content">
                {{ el.content }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-row>
      <div v-for="document in documents" :key="document.id">
        <!-- here, fix order -->
        <!-- {{ document }} -->
        <h2>{{ document.title }}</h2>
        <h3 v-if="document.author">by {{ document.author }}</h3>
        <div v-for="element in document.elements" :key="element.id">
          <h3 v-if="element.element == 'h3'">
            {{ element.content }}
          </h3>
          <h3 v-if="element.title">{{ element.title }}</h3>
          <img
            class="image"
            v-if="element.element == 'img'"
            :src="element.src"
            alt=""
          />
          <ul v-if="element.element == 'ul'">
            <li v-for="item in orderElements(element.content)" :key="item.id">
              {{ item.content }}
            </li>
          </ul>
          <ol v-if="element.element == 'ol'">
            <li v-for="item in orderElements(element.content)" :key="item.id">
              {{ item.content }}
            </li>
          </ol>
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
      </div>
    </v-container>
  </div>
</template>

<script>
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
