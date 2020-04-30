<template>
  <div id="information-link">
    <div v-if="!display || document.pdf">
      <div v-if="document.pdf">
        <button @click="openNewTab(document.pdf)">
          {{ linkText }}
        </button>
      </div>
      <button v-else @click="displayInfo">
        {{ linkText }}
      </button>
    </div>
    <div v-else>
      <button @click="displayInfo">
        Hide Text
      </button>
      <br />
      <h2>{{ document.title }}</h2>
      <h3>{{ document.author }}</h3>
      <div v-for="image in document.images" :key="image.id">
        <img :src="image" alt="" />
      </div>
      <div v-for="(tag, index) in document.content" :key="tag.id">
        <div v-if="isParagraph(index)">
          <h2>{{ tag.title }}</h2>
          <p v-if="tag.content">
            {{ tag.content }}
          </p>
          <p v-else>
            {{ tag }}
          </p>
        </div>
        <blockquote class="quote" v-if="isQuote(index)">
          {{ tag }}
        </blockquote>
        <a v-if="tag.src" :href="tag.src">{{ tag.linkText }}</a>
        <ul v-if="isUl(index)">
          <li v-for="li in tag" :key="li.id">
            {{ li }}
          </li>
        </ul>
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
    isParagraph(index) {
      let regex = RegExp('p$')
      return regex.test(index)
    },
    isQuote(index) {
      let regex = RegExp('q$')
      return regex.test(index)
    },
    isLink(index) {
      let regex = RegExp('link$')
      return regex.test(index)
    },
    openNewTab(link) {
      window.open(link.toString())
    },
    isUl(index) {
      let regex = RegExp('ul$')
      return regex.test(index)
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
