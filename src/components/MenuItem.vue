<template>
  <router-link :to="{ name: route.name }">
    <div class="link">
      <div class="text">
        <slot>{{ route.name }}</slot>
      </div>
      <svg class="icon" width="9" height="9">
        <use v-bind="{ 'xlink:href': '/feather-sprite.svg#chevron-right' }" />
      </svg>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    route: Object
  }
}
</script>

<style scoped>
/* Grid Level */
.link {
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;

  border-bottom: 1px solid #cbcbcb;
  border-right: 1px solid #cbcbcb;

  width: 100%;
  height: 100%;
}

/* Item Level */
.text {
  justify-self: start;
  align-self: center;
  padding: 10%;
}
.icon {
  grid-column: 3 / 4;
  place-self: center;
}
</style>
