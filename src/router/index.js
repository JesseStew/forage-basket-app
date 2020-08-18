import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/information',
    name: 'Information',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "information" */ '../views/Information.vue'),
  },
  {
    path: '/testimonies',
    name: 'Testimonies',
    component: () =>
      import(/* webpackChunkName: "testimonies" */ '../views/Testimonies.vue'),
  },
  {
    path: '/health',
    name: 'Health',
    component: () =>
      import(/* webpackChunkName: "health" */ '../views/Health.vue'),
  },
  {
    path: '/essential-oils',
    name: 'Essential Oils',
    component: () =>
      import(
        /* webpackChunkName: "essentialloils" */ '../views/EssentialOils.vue'
      ),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
  },
  {
    path: '/research',
    name: 'Research',
    component: () =>
      import(/* webpackChunkName: "research" */ '../views/Research.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue'),
  },
  {
    path: '/user-account',
    name: 'User Account',
    component: () =>
      import(/* webpackChunkName: "user-account" */ '../views/UserAccount.vue'),
  },
  {
    path: '/information-link',
    name: 'Information Link',
    component: () =>
      import(
        /* webpackChunkName: "information-link" */ '../components/InformationLink.vue'
      ),
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: () =>
      import(
        /* webpackChunkName: "information-link" */ '../views/ForgotPassword.vue'
      ),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
      import(/* webpackChunkName: "checkout" */ '../views/Cart.vue'),
  },
  {
    path: '/product-category',
    name: 'Product Category',
    component: () =>
      import(
        /* webpackChunkName: "product-category" */ '../views/ProductCategory.vue'
      ),
  },
  {
    path: '/health-article',
    name: 'Health Article',
    component: () =>
      import(/* webpackChunkName: "health-article" */ '../views/HealthArticle.vue'),
  },
  {
    path: '/information-article',
    name: 'Information Article',
    component: () =>
      import(
        /* webpackChunkName: "information-article" */ '../views/InformationArticle.vue'
      ),
  },
  {
    path: '/health-article',
    name: 'Health Article',
    component: () =>
      import(
        /* webpackChunkName: "information-article" */ '../views/HealthArticle.vue'
      ),
  },
  {
    path: '/essentialloils-article',
    name: 'Essential Oils Article',
    component: () =>
      import(
        /* webpackChunkName: "essentialloils-article" */ '../views/EssentialoilsArticle.vue'
      ),
  },
  {
    path: '/article-creator',
    name: 'Article Creator',
    component: () =>
      import(
        /* webpackChunkName: "article-creator" */ '../views/ArticleCreator.vue'
      ),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/AboutUs.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
