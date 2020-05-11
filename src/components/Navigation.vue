<template>
  <nav>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Forage Basket</v-toolbar-title>
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

<style scoped>
/* Grid Level */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  grid-template-rows: 53px 53px;
  align-items: center;
  border-bottom: 1px solid #cbcbcb;
}
.nested {
  display: grid;
}
.search-template {
  grid-template-columns: 1fr 3fr 40px 1fr;
}

/* Item Level */
/* Header */
.search {
  height: 53px;
  grid-column: 1 / 6;
}
.search input {
  border: none;
  background-color: #f8f8f8;
  grid-column: 2 / 3;
}
.search input:hover {
  border: none;
  background-color: #f8f8f8;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.search button {
  height: 40px;
  width: 40px;
  background-color: #565458;
  border: none;
  border-radius: 2px;
}
.search button:hover {
  height: 40px;
  width: 40px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2px;
}
a {
  text-decoration: none;
}
</style>
