<template>
  <nav style="height: 93px">
    <v-app-bar dark fixed color="#6e6f72">
      <v-app-bar-nav-icon color="#ed6f5e" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title style="font-size: 3em; ">
        <img contain height="45px" :src="require('../assets/images/logo/Siahus-Logo-Circle.png')"></img>
        <span style="color: #588d68;">SIAH</span><span style="color: #ed6f5e;">US</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.breakpoint.smAndUp" v-slot:extension>
        <v-tabs v-model="activeTab" color="#8fc151" centered center-active>
          <v-tabs-slider color="#8fc151"></v-tabs-slider>

          <span v-for="link in tabs" :key="link.id">
            <v-tab v-if="!link.subLinks" router :to="link.path">
              <!-- <v-btn text><span :class="{ 'active-color': isActive(link.path), 'green': !isActive(link.path)}">{{ link.name }}</span></v-btn> -->
              <v-btn color="green" text><span :class="{ 'active-color': isActive(link.path)}">{{ link.name }}</span></v-btn>
            </v-tab>
            <v-tab v-else>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="green"
                    text
                    class="align-self-center"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span :class="{ 'active-color': $route.path === '/information' || $route.path === '/essential-oils'}">{{ link.name }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list color="#6e6f72">
                  <v-list-item
                    v-for="item in informationTabs"
                    :key="item.id"
                    router
                    :to="item.path"
                    @click="activeTab = 1"
                  >
                    <span :class="{ 'active-color': isActive(item.path), 'normal-color': !isActive(item.path)}">{{ item.name }}</span>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-tab>
          </span>
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
          <v-btn color="#ed6f5e" v-else v-on="on" icon class="subtitle-1" router to="/cart">
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
        <v-list-item color="green" link :to="tab.path" v-if="!tab.subLinks" v-for="tab in tabs" :key="tab.id">
          <v-list-item-icon>
            <v-icon>
              {{tab.icon}}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ tab.name }}
          </v-list-item-title>
        </v-list-item>
        <v-list-group color="green" :prepend-icon="tab.icon" v-else>
          <template v-slot:activator>
            <v-list-item-title>Information</v-list-item-title>
          </template>
          <v-list-item color="green" style="padding-left: 30px" link @click="activeTab = 1" :to="informationTab.path" v-for="informationTab in informationTabs" :key="informationTab.id">
            <v-list-item-icon>
              <v-icon v-text="informationTab.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="informationTab.name"></v-list-item-title>
          </v-list-item>
        </v-list-group>
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
      informationTabs: [
        {
          path: '/information',
          name: 'Apán',
          icon: 'mdi-mushroom',
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
    isActive(path) {
      return path === this.$route.path
    }
  },
  components: {},
}
</script>

<style scoped>
.active-color {
  color: #ed6f5e;
}
.normal-color {
  color: #57ad58;
}
</style>
