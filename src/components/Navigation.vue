<template>
  <nav style="height: 93px">
    <v-app-bar dark fixed color="#6e6f72">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Siahus</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp" v-slot:extension>
        <v-tabs v-model="activeTab" color="#8fc151" centered center-active>
          <v-tabs-slider color="#8fc151"></v-tabs-slider>

          <span v-for="link in tabs" :key="link.id">
            <v-tab v-if="!link.subLinks" router :to="link.path">
              <v-btn text>{{ link.name }}</v-btn>
            </v-tab>
            <v-tab v-else>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="align-self-center"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ link.name }}
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list class="grey lighten-3">
                  <v-list-item
                    v-for="item in information"
                    :key="item.id"
                    router
                    :to="item.path"
                    @click="activeTab = 1"
                  >
                    {{ item.name }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-tab>
          </span>
          <!-- <v-tab router to="/">
            Home
          </v-tab>
          <v-tab :class="{ 'v-tab--active': dropDownActive }">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="align-self-center"
                  v-bind="attrs"
                  v-on="on"
                >
                  Information
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list class="grey lighten-3">
                <v-list-item
                  v-for="item in information"
                  :key="item.id"
                  router
                  :to="item.path"
                >
                  {{ item.name }}
                </v-list-item>
              </v-list>
            </v-menu>
          </v-tab>
          <v-tab router to="/testimonies">
            Testimonies
          </v-tab>
          <v-tab router to="/health">
            Health
          </v-tab>
          <v-tab router to="/shop">
            Shop
          </v-tab>
          <v-tab router to="/research">
            Research
          </v-tab>
          <v-tab router to="/contact">
            Contact
          </v-tab>
          <v-tab router to="/user-account">
            User Account
          </v-tab>
          <v-tab router to="/cart">
            Cart
          </v-tab>
          <v-tab v-if="user.isAdmin" router to="/article-creator">
            Article Creator
          </v-tab> -->
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
      activeTab: 0,
      drawer: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      information: [
        {
          path: '/information',
          name: 'Apán',
          icon: 'mdi-information',
          adminRequired: false,
        },
        {
          path: '/essential-oils',
          name: 'Essential Oils',
          icon: 'mdi-water',
          adminRequired: false,
        }
      ],
      links: [
        {
          id: 0,
          path: '/',
          name: 'Home',
          icon: 'mdi-home',
          adminRequired: false,
        },
        {
          id: 1,
          path: '/information',
          name: 'Information',
          icon: 'mdi-information',
          adminRequired: false,
          subLinks: true,
        },
        {
          id: 2,
          path: '/testimonies',
          name: 'Testimonies',
          icon: 'mdi-comment-account',
          adminRequired: false,
        },
        {
          id: 3,
          path: '/health',
          name: 'Health',
          icon: 'mdi-google-fit',
          adminRequired: false,
        },
        {
          id: 4,
          path: '/shop',
          name: 'Shop',
          icon: 'mdi-storefront',
          adminRequired: false,
        },
        {
          id: 5,
          path: '/research',
          name: 'Research',
          icon: 'mdi-school',
          adminRequired: false,
        },
        {
          id: 6,
          path: '/contact',
          name: 'Contact',
          icon: 'mdi-account-question',
          adminRequired: false,
        },
        {
          id: 7,
          path: '/user-account',
          name: 'User Account',
          icon: 'mdi-account',
          adminRequired: false,
        },
        {
          id: 8,
          path: '/cart',
          name: 'Cart',
          icon: 'mdi-storefront',
          adminRequired: false,
        },
        {
          id: 9,
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
