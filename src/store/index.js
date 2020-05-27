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
    loggedIn(state, profile) {
      if (profile) {
        state.user.firstName = profile.firstName
        state.user.lastName = profile.lastName
        state.user.userName = profile.userName
        state.user.email = profile.email
        state.user.emailVerified = profile.emailVerified
        state.user.photoURL = profile.photoURL
        state.user.isAnonymous = profile.isAnonymous
        state.user.uid = profile.uid
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
    registerAccount(state, profile) {
      console.log('state.profile:', profile)
      state.user.firstName = profile.firstName
      state.user.lastName = profile.lastName
      state.user.userName = profile.userName
      state.user.email = profile.email
      state.user.emailVerified = profile.emailVerified
      state.user.photoURL = profile.photoURL
      state.user.isAnonymous = profile.isAnonymous
      state.user.uid = profile.uid
    },
    loginAccount(state, profile) {
      state.user.firstName = profile.firstName
      state.user.lastName = profile.lastName
      state.user.userName = profile.userName
      state.user.email = profile.email
      state.user.emailVerified = profile.emailVerified
      state.user.photoURL = profile.photoURL
      state.user.isAnonymous = profile.isAnonymous
      state.user.uid = profile.uid
    },
  },
  actions: {
    loggedIn({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        let docRef = firebase
          .firestore()
          .collection('profile')
          .doc(user.uid)
        docRef.get().then((profile) => {
          profile = profile.data()
          profile.emailVerified = user.emailVerified
          profile.photoURL = user.photoURL
          profile.isAnonymous = user.isAnonymous
          profile.uid = user.uid
          commit('loggedIn', profile)
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
            .collection('profile')
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
        .then(
          function(user) {
            let docRef = firebase
              .firestore()
              .collection('profile')
              .doc(user.uid)
            docRef.get().then((profile) => {
              profile = profile.data()
              profile.emailVerified = user.emailVerified
              profile.photoURL = user.photoURL
              profile.isAnonymous = user.isAnonymous
              profile.uid = user.uid
              commit('loginAccount', profile)
            })
          },
          function(err) {
            alert('Loggin failure.')
          }
        )
    },
  },
  modules: {},
})
