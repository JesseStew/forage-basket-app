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
      displayName: '',
      firstName: '',
      lastName: '',
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
        console.log(user.uid)
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
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
          }
          commit('setUser', newUser)
          // Add a new document in collection "cities"
          db.collection('profiles')
            .doc(user.user.uid)
            .set({
              name: payload.name,
            })
            .then(function() {
              console.log('Document successfully written!')
            })
            .catch(function(error) {
              console.error('Error writing document: ', error)
            })
          toastr.success('Your Account was created successfully')
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
          toastr.error('Oops' + error.message)
        })
    },
    registerAccount({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          console.log(user.uid)
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
