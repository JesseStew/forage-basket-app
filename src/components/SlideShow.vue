<template>
  <div>
    <div v-for="source in sources" :key="source.id">
      <!-- <img :src="photo(source.src)" alt="" srcset="" /> -->
      <!-- {{ photo(source.src) }} -->
    </div>
  </div>
</template>

<script>
// https://vuejs-templates.github.io/webpack/static.html
// this.$_.forEach(sources, (source) => {
//   con
// })
export default {
  props: {
    sources: {
      type: Array,
    },
  },
  methods: {
    // importImgs(src) {
    //   const photo = require(src)
    //   return photo
    // },
  },
  computed: {
    photo(src) {
      // console.log(src)
      // return require('../assets/testimonies/Jan B.')
    },
  },
}
</script>

<style scoped></style>
