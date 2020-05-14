<template>
  <nav style="height: 64px">
    <v-app-bar fixed color="blue-grey lighten-5">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Forage Basket</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu open-on-hover top offsety>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon class="subtitle-1" router to="/user-account">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            router
            to="/user-account"
            v-for="(item, index) in items"
            :key="index"
            @click=""
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" router :to="link.path">
            <v-list-item-icon>
              <v-icon> {{ link.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ link.name }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
export default {
  name: 'Navigation',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      links: [
        {
          path: '/',
          name: 'Home',
          icon: 'mdi-home',
        },
        {
          path: '/information',
          name: 'Information',
          icon: 'mdi-information',
        },
        {
          path: '/testimonies',
          name: 'Testimonies',
          icon: 'mdi-comment-account',
        },
        {
          path: '/health',
          name: 'Health',
          icon: 'mdi-google-fit',
        },
        {
          path: '/essential-oils',
          name: 'Essential Oils',
          icon: 'mdi-water',
        },
        {
          path: '/shop',
          name: 'Shop',
          icon: 'mdi-storefront',
        },
        {
          path: '/research',
          name: 'Research',
          icon: 'mdi-school',
        },
        {
          path: '/contact',
          name: 'Contact',
          icon: 'mdi-account-question',
        },
        {
          path: '/product',
          name: 'Product',
          icon: 'mdi-storefront',
        },
        {
          path: '/user-account',
          name: 'User Account',
          icon: 'mdi-account',
        },
      ],
    }
  },
  methods: {
    closeMenu() {
      this.drawer = false
    },
  },
  components: {
    NavMenu,
  },
}
</script>

<style scoped></style>
