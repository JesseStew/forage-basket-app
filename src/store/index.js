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
    loggedIn(state) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          state.user.state = user.state
          state.user.email = user.email
          state.user.emailVerified = user.emailVerified
          state.user.photoURL = user.photoURL
          state.user.isAnonymous = user.isAnonymous
          state.user.uid = user.uid
          state.user.providerData = user.providerData
          alert('User Logged in.')
        } else {
          state.user.state = ''
          state.user.email = ''
          state.user.emailVerified = false
          state.user.photoURL = ''
          state.user.isAnonymous = false
          state.user.uid = ''
          state.user.providerData = ''
        }
      })
    },
    signOut(state) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          state.user.state = ''
          state.user.email = ''
          state.user.emailVerified = false
          state.user.photoURL = ''
          state.user.isAnonymous = false
          state.user.uid = ''
          state.user.providerData = ''
          alert('Signed Out')
        })
        .catch(function(err) {
          alert('Problem Signing Out')
        })
    },
    registerAccount(state, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(function(user) {
          state.user.state = user.state
          state.user.email = user.email
          state.user.emailVerified = user.emailVerified
          state.user.photoURL = user.photoURL
          state.user.isAnonymous = user.isAnonymous
          state.user.uid = user.uid
          state.user.providerData = user.providerData
          alert('Your account has been created')
        })
        .catch(function(err) {
          alert(err.message)
        })
    },
    loginAccount(state, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(function(user) {
          state.user.state = user.state
          state.user.email = user.email
          state.user.emailVerified = user.emailVerified
          state.user.photoURL = user.photoURL
          state.user.isAnonymous = user.isAnonymous
          state.user.uid = user.uid
          state.user.providerData = user.providerData
          alert('You have logged in.')
        })
        .catch(function(err) {
          alert('Loggin failure.')
        })
    },
  },
  actions: {},
  modules: {},
})
