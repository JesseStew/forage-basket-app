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
      } else {
        state.user.state = ''
        state.user.email = ''
        state.user.emailVerified = false
        state.user.photoURL = ''
        state.user.isAnonymous = false
        state.user.uid = ''
      }
    },
    signOut(state) {
      state.user.state = ''
      state.user.email = ''
      state.user.emailVerified = false
      state.user.photoURL = ''
      state.user.isAnonymous = false
      state.user.uid = ''
    },
    registerAccount(state, profile) {
      console.log('state.profile:', profile)
      state.user.state = profile.state
      state.user.email = profile.email
      state.user.emailVerified = profile.emailVerified
      state.user.photoURL = profile.photoURL
      state.user.isAnonymous = profile.isAnonymous
      state.user.uid = profile.uid
    },
    loginAccount(state, user) {
      state.user.state = user.state
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
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
        .catch(function(err) {})
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
          console.log('user: ', user)
          let profile = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            userName: payload.userName,
            email: user.user.email,
            uid: user.user.uid,
            emailVerified: user.user.emailVerified,
            photoURL: user.user.photoURL,
            isAnonymous: user.user.isAnonymous,
          }
          console.log(profile)
          firebase
            .firestore()
            .collection('user')
            .doc(user.user.uid)
            .set({
              firstName: payload.firstName,
              lastName: payload.lastName,
              userName: payload.userName,
              email: payload.email,
            })
            .then(function() {
              console.log('Document successfully written!')
            })
            .catch(function(error) {
              console.error('Error writing document: ', error)
            })
          commit('registerAccount', profile)
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
