<template>
  <div id="information-link">
    <button v-if="document.link" @click="openNewTab(document.link)">
      {{ document.linkText }}
    </button>
    <button v-else @click="displayInfo">
      {{ document.linkText }}
    </button>
    <div v-if="display">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
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
