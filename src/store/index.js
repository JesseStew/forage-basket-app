import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

// Could slow down app
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import _ from 'lodash'
import http from '../http-common'

const stripe = Stripe('pk_test_sMRjdB96GQu0iJit6U4PBv1i00llNerPaZ')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      emailVerified: false,
      photoURL: '',
      isAnonymous: false,
      uid: '',
    },
    cart: [],
    shopData: {},
    shopDataLoaded: false,
    testimonyData: {},
    testimonyDataLoaded: false,
    healthData: {},
    healthDataLoaded: false,
    informationData: [],
    informationDataLoaded: false,
    researchData: [],
    researchDataLoaded: false,
  },
  mutations: {
    loadResearchData(state, data) {
      state.researchData = data
      state.researchDataLoaded = true
    },
    loadTestimonyData(state, data) {
      state.testimonyData = data
      state.testimonyDataLoaded = true
    },
    loadHealthData(state, data) {
      state.healthData = data
      state.healthDataLoaded = true
    },
    loadInformationData(state, data) {
      state.informationData = data
      state.informationDataLoaded = true
    },
    loadShopData(state, data) {
      let shopData = data.shopData
      let prices = data.prices
      _.forEach(shopData, (product) => {
        product.price = _.find(prices, (o) => {
          return o.product === product.productId
        })
      })
      state.shopData = shopData
      state.shopDataLoaded = true
    },
    loggedIn(state, user) {
      if (user) {
        state.user.firstName = user.firstName
        state.user.lastName = user.lastName
        state.user.userName = user.userName
        state.user.email = user.email
        state.user.emailVerified = user.emailVerified
        state.user.photoURL = user.photoURL
        state.user.isAnonymous = user.isAnonymous
        state.user.uid = user.uid
      } else {
        state.user.firstName = ''
        state.user.lastName = ''
        state.user.userName = ''
        state.user.email = ''
        state.user.emailVerified = false
        state.user.photoURL = ''
        state.user.isAnonymous = false
        state.user.uid = ''
      }
    },
    signOut(state) {
      state.user.firstName = ''
      state.user.lastName = ''
      state.user.userName = ''
      state.user.email = ''
      state.user.emailVerified = false
      state.user.photoURL = ''
      state.user.isAnonymous = false
      state.user.uid = ''
    },
    registerAccount(state, user) {
      state.user.firstName = user.firstName
      state.user.lastName = user.lastName
      state.user.userName = user.userName
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
    },
    loginAccount(state, user) {
      state.user.firstName = user.firstName
      state.user.lastName = user.lastName
      state.user.userName = user.userName
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
    },
    addToCart(state, payload) {
      let itemIndex = _.findIndex(state.cart, (item) => {
        return item.product.productId === payload.product.productId
      })
      if (itemIndex !== -1) {
        console.log('already exists index:', itemIndex)
        state.cart[itemIndex].quantity = state.cart[itemIndex].quantity + 1
      } else {
        let lineItem = {
          price: payload.priceId,
          quantity: payload.quantity,
          product: payload.product,
        }
        state.cart.push(lineItem)
      }
    },
    removeFromCart(state, payload) {
      state.cart = _.filter(state.cart, (item) => {
        return item.product.productId !== payload.productId
      })
    },
    checkout(state) {
      state.cart = []
    },
  },
  actions: {
    loggedIn({ commit }) {
      // here, fix later
      // https://stackoverflow.com/questions/47893328/checking-if-a-particular-value-exists-in-the-firebase-database
      // https://firebase.google.com/docs/reference/android/com/google/firebase/database/DatabaseReference
      firebase.auth().onAuthStateChanged((user) => {
        // console.log(user)
        let docRef = firebase
          .firestore()
          .collection('user')
          .doc(user.uid)
        docRef.get().then((user) => {
          user = user.data()
          // console.log(user)
          user.emailVerified = user.emailVerified
          user.photoURL = user.photoURL
          user.isAnonymous = user.isAnonymous
          user.uid = user.uid
          commit('loggedIn', user)
        })
      })
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          commit('signOut')
        })
        .catch(function(err) {})
    },
    registerAccount({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          // console.log(user)
          let userProfile = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            userName: payload.userName,
            email: payload.email,
            uid: user.user.uid,
            emailVerified: user.user.emailVerified,
            photoURL: user.user.photoURL,
            isAnonymous: user.user.isAnonymous,
          }
          // console.log(userProfile)
          firebase
            .firestore()
            .collection('user')
            .doc(user.user.uid)
            .set({
              firstName: userProfile.firstName,
              lastName: userProfile.lastName,
              userName: userProfile.userName,
              email: userProfile.email,
              uid: userProfile.uid,
              emailVerified: userProfile.emailVerified,
              photoURL: userProfile.photoURL,
              isAnonymous: userProfile.isAnonymous,
            })
            .then(function() {
              console.log('Document successfully written!')
            })
            .catch(function(error) {
              console.error('Error writing document: ', error)
            })
          commit('registerAccount', userProfile)
        })
        .catch(function(err) {
          alert(err.message)
        })
    },
    loginAccount({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          (user) => {
            // console.log(user)
            firebase
              .firestore()
              .collection('user')
              .doc(user.user.uid)
              .get()
              .then((user) => {
                user = user.data()
                // console.log(user)
                user.emailVerified = user.emailVerified
                user.photoURL = user.photoURL
                user.isAnonymous = user.isAnonymous
                user.uid = user.uid
                commit('loginAccount', user)
              })
          },
          function(err) {
            alert('Loggin failure.')
          }
        )
    },
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
    },
    async checkout({ commit, state }) {
      // console.log('uid: ', state.user.uid)
      // console.log('cart: ', state.cart)
      let cart = []
      _.forEach(state.cart, (item) => {
        cart.push({
          price: item.price,
          quantity: item.quantity,
        })
        // console.log('price: ', item.price)
        // console.log('quantity: ', item.quantity)
      })
      if (state.user.uid === '') {
        router.push({ path: '/user-account' })
        alert('Must register or log in.')
      } else {
        let customer = await firebase
          .firestore()
          .collection('user')
          .doc(state.user.uid)
          .collection('stripe')
          .doc('stripe_customer')
          .get()
        http
          .post('/widgets/create-session', {
            customer: customer.stripe_customer_id,
            customer_email: state.user.email,
            mode: 'payment',
            line_items: cart,
          })
          .then((response) => {
            // console.log('response: ', response)
            // console.log('response.data.sessionId: ', response.data.sessionId)
            let sessionId = response.data.sessionId
            stripe
              .redirectToCheckout({
                sessionId: sessionId,
              })
              .then((result) => {
                if (result.error) {
                  this.errorMessage = result.error.message
                }
                commit('checkout')
              })
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },
    async loadShopData({ commit }) {
      let data = await firebase
        .firestore()
        .collection('product')
        .get()
      let shopData = []
      data.forEach((doc) => {
        shopData.push(doc.data())
      })

      let prices = await http.get('/widgets/getAllStripePrices')

      commit('loadShopData', { shopData: shopData, prices: prices.data.data })
    },
    loadTestimonyData({ commit }) {
      firebase
        .firestore()
        .collection('testimonies')
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data())
          // console.log('loadTestimonyData: ', documents)
          commit('loadTestimonyData', documents)
        })
    },
    loadHealthData({ commit }) {
      firebase
        .firestore()
        .collection('health')
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data())
          // console.log('loadHealthData: ', documents)
          commit('loadHealthData', documents)
        })
    },
    loadInformationData({ commit }) {
      firebase
        .firestore()
        .collection('information')
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data())
          commit('loadInformationData', documents)
        })
    },
    loadResearchData({ commit }) {
      firebase
        .firestore()
        .collection('research')
        .get()
        .then((querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => doc.data())
          // console.log('loadHealthData: ', documents)
          commit('loadResearchData', documents)
        })
    },
  },
  getters: {
    accessories: (state) => {
      return state.shopData.filter((product) => {
        return product.category === 'accessories'
      })
    },
    essentialOilBlends: (state) => {
      return state.shopData.filter((product) => {
        return product.category === 'essentialOilBlends'
      })
    },
    essentialOilSingles: (state) => {
      return state.shopData.filter((product) => {
        return product.category === 'essentialOilSingles'
      })
    },
    shiaqgaSuperConcentrate: (state) => {
      return state.shopData.filter((product) => {
        return product.category === 'shiaqgaSuperConcentrate'
      })
    },
    shiaqgaOriginalFormula: (state) => {
      return state.shopData.filter((product) => {
        return product.category === 'shiaqgaOriginalFormula'
      })
    },
    shiaqgaPetImmunity: (state) => {
      return state.shopData.filter((product) => {
        return product.category === 'shiaqgaPetImmunity'
      })
    },
  },
  modules: {},
})
