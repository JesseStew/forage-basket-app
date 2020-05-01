<template>
  <div id="information-link">
    <div v-if="document.linkText === 'CLICK HERE FOR SHIAQGA INFORMATION'">
      <h1>{{ document.title }}</h1>
      <button @click="displayInfo">
        {{ linkText }}
      </button>
      <div
        v-if="display"
        v-for="element in orderElements(document.elements)"
        :key="element.id"
      >
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
    linkText: {
      type: String,
    },
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
</style>
