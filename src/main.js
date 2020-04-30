import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDaEogUnObjqoTqE0AZPWsOkIyUpJucUtE",
  authDomain: "farmbook-34ed0.firebaseapp.com",
  databaseURL: "https://farmbook-34ed0.firebaseio.com",
  projectId: "farmbook-34ed0",
  storageBucket: "farmbook-34ed0.appspot.com",
  messagingSenderId: "466190013989",
  appId: "1:466190013989:web:a7fcc3e0fae37106d0d1cc",
  measurementId: "G-Y9EKWN6VEK"
}

firebase.initializeApp(firebaseConfig)

Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export const db = firebase.firestore()
