<template>
  <transition name="slide">
    <div class="menu" v-if="show" @click="closeMenu()">
      <div v-for="route in routesArray" :key="route.id">
        <MenuItem :route="route"></MenuItem>
      </div>
    </div>
  </transition>
</template>

<script>
import { routes } from '@/router/index.js';
import MenuItem from '@/components/MenuItem.vue';

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      routesArray: routes
    };
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu');
    }
  },
  components: {
    MenuItem
  }
};
</script>

<style scoped>
/* Menu */
.menu {
  width: 100%;
  position: absolute;
  background-color: white;
}

/* Animations */
/* Slide menu bar */
.slide-enter-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.slide-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
