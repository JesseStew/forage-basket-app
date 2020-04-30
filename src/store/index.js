import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      email: '',
      password: '',
      displayName: '',
    }
  },
  mutations: {
    registerAccount(state, payload) {
      state.user.email = payload.email
      state.user.password = payload.password
      state.user.displayName = payload.displayName
    }
  },
  actions: {
    registerAccount({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          console.log("additionalUserInfo: ", user.additionalUserInfo)
          console.log("credential: ", user.credential)
          console.log("operationType: ", user.operationType)
          console.log("user: ", user.user)
          user.user.updateProfile({
            displayName: payload.displayName
          }).then(function() {
            // Update successful.
            commit('registerAccount', payload)
          }).catch(function(error) {
            // An error happened.
            console.log(error)
          })
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  },
  modules: {
  }
})
