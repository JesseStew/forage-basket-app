import Vue from 'vue'
import Vuex from 'vuex'

// Could slow down app
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
  },
  mutations: {
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
      // console.log('state.user:', user)
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
      let lineItem = {
        price: payload.priceId,
        quantity: payload.quantity,
        product: payload.product,
      }
      state.cart.push(lineItem)
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
  },
  modules: {},
})
