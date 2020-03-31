<template>
  <transition name="slide">
    <div class="menu" v-if="show">
      <!-- Router Links -->
      <div class="menu-item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/information">Information</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/testimonies">Testimonies</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/health">Health</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/essential-oils">Essential Oils</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/shop">Shop</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/research">Research</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/contact">Contact Us</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/product">Product</router-link>
      </div>
      <div class="menu-item">
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
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
