<template>
  <div id="nav-menu">
    <transition name="slide">
      <div class="menu" v-if="show" @click="closeMenu()">
        <div class="menu-item" v-for="route in routesArray" :key="route.id">
          <span v-if="route.path != '/information-link'">
            <MenuItem :route="route"></MenuItem>
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { routes } from '@/router/index.js'
import MenuItem from '@/components/MenuItem.vue'

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      routesArray: routes,
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu')
    },
  },
  components: {
    MenuItem,
  },
}
</script>

<style scoped>
/* Menu */
.menu {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 50px);
  align-items: center;

  width: 320px;
  position: absolute;
  background-color: white;

  border: 1px solid #cbcbcb;
}

.menu-item {
  width: 320px;
  height: 100%;
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
  transform: translateX(-320px);
  opacity: 0;
}
</style>
