import Vue from 'vue'
import Vuex from 'vuex'

// Could slow down app
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      displayName: 'test',
      email: 'test@test.com',
      emailVerified: false,
      photoURL: '',
      isAnonymous: '',
      uid: '',
      providerData: '',
    },
  },
  mutations: {
    loggedIn() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          this.displayName = user.displayName
          this.email = user.email
          this.emailVerified = user.emailVerified
          this.photoURL = user.photoURL
          this.isAnonymous = user.isAnonymous
          this.uid = user.uid
          this.providerData = user.providerData
          console.log(this.email)
          alert('User Logged in.')
        }
      })
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          alert('Signed Out')
        })
        .catch(function(err) {
          alert('Problem Signing Out')
        })
    },
    registerAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
          console.log(user)
          alert('Your account has been created')
        })
        .catch(function(err) {
          alert('Did not create account')
        })
    },
    loginAccount() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function(user) {
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
