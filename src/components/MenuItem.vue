<template>
  <div>
    <router-link :to="{ name: route.name }">
      <slot>{{ route.name }}</slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    route: Object
  }
};
</script>

<style scoped></style>
