<template>
  <nav style="height: 93px">
    <v-app-bar fixed color="blue-grey lighten-5">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Forage Basket</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp" v-slot:extension>
        <v-tabs centered center-active>
          <v-tab router :to="link.path" v-for="link in tabs" :key="link.name">
            {{ link.name }}
          </v-tab>
        </v-tabs>
      </template>
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-if="cart.length > 0"
            v-on="on"
            icon
            class="subtitle-1"
            router
            to="/cart"
          >
            <v-icon>mdi-cart-outline </v-icon>
            ({{ cart.length }})
          </v-btn>
          <v-btn v-else v-on="on" icon class="subtitle-1" router to="/cart">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
        </template>
        <v-list v-if="cart.length > 0">
          <v-list-item
            router
            to="/cart"
            v-for="(item, index) in cart"
            :key="index"
            @click=""
          >
            <v-list-item-title
              >({{ item.quantity }}) {{ item.product.name }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer style="height: 100vh" v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="link in tabs" router :to="link.path">
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
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapState(['cart', 'user']),
    tabs() {
      if (this.user.isAdmin) {
        return this.links
      } else {
        return this.$_.filter(this.links, (o) => {
          return !o.adminRequired
        })
      }
    }
  },
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
          adminRequired: false,
        },
        {
          path: '/information',
          name: 'Information',
          icon: 'mdi-information',
          adminRequired: false,
        },
        {
          path: '/testimonies',
          name: 'Testimonies',
          icon: 'mdi-comment-account',
          adminRequired: false,
        },
        {
          path: '/health',
          name: 'Health',
          icon: 'mdi-google-fit',
          adminRequired: false,
        },
        {
          path: '/essential-oils',
          name: 'Essential Oils',
          icon: 'mdi-water',
          adminRequired: false,
        },
        {
          path: '/shop',
          name: 'Shop',
          icon: 'mdi-storefront',
          adminRequired: false,
        },
        {
          path: '/research',
          name: 'Research',
          icon: 'mdi-school',
          adminRequired: false,
        },
        {
          path: '/contact',
          name: 'Contact',
          icon: 'mdi-account-question',
          adminRequired: false,
        },
        {
          path: '/user-account',
          name: 'User Account',
          icon: 'mdi-account',
          adminRequired: false,
        },
        {
          path: '/cart',
          name: 'Cart',
          icon: 'mdi-storefront',
          adminRequired: false,
        },
        {
          path: '/article-creator',
          name: 'Article Creator',
          icon: 'mdi-information',
          adminRequired: true,
        },
      ],
    }
  },
  methods: {
    closeMenu() {
      this.drawer = false
    },
  },
  components: {},
}
</script>

<style scoped></style>
