<template>
  <div class="slide-show">
    <img
      v-for="(source, index) in sources"
      :key="source.id"
      class="item"
      :src="source"
      alt=""
      srcset=""
    />
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
    getClass(index) {
      if (index === '1') {
        return 'main-photo'
      } else {
        return 'secondary-photo'
      }
    },
  },
  computed: {},
}
</script>

<style scoped>
.slide-show {
  height: 15em;
  text-align: center;
}
.item {
  height: 15em;
  padding: 0.5em;
}
</style>
