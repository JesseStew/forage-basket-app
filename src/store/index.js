import Vue from 'vue'
import Vuex from 'vuex'

// Could slow down app
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      displayName: '',
      email: '',
      emailVerified: false,
      photoURL: '',
      isAnonymous: false,
      uid: '',
      providerData: '',
    },
  },
  mutations: {
    loggedIn(state, user) {
      if (user) {
        state.user.state = user.state
        state.user.email = user.email
        state.user.emailVerified = user.emailVerified
        state.user.photoURL = user.photoURL
        state.user.isAnonymous = user.isAnonymous
        state.user.uid = user.uid
        state.user.providerData = user.providerData
        // alert('User Logged in.')
      } else {
        state.user.state = ''
        state.user.email = ''
        state.user.emailVerified = false
        state.user.photoURL = ''
        state.user.isAnonymous = false
        state.user.uid = ''
        state.user.providerData = ''
      }
    },
    signOut(state) {
      state.user.state = ''
      state.user.email = ''
      state.user.emailVerified = false
      state.user.photoURL = ''
      state.user.isAnonymous = false
      state.user.uid = ''
      state.user.providerData = ''
      alert('Signed Out')
    },
    registerAccount(state, user) {
      state.user.state = user.state
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
      state.user.providerData = user.providerData
    },
    loginAccount(state, user) {
      state.user.state = user.state
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
      state.user.providerData = user.providerData
    },
  },
  actions: {
    loggedIn({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        commit('loggedIn', user)
      })
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          commit('signOut')
        })
        .catch(function(err) {
          alert('Problem Signing Out')
        })
    },
    registerAccount({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('registerAccount', user)
        })
        .catch(function(err) {
          alert(err.message)
        })
    },
    loginAccount({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(function(user) {
          commit('loginAccount', user)
        })
        .catch(function(err) {
          alert('Loggin failure.')
        })
    },
  },
  modules: {},
})
