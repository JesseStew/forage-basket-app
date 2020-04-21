import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {},
  actions: {},
  modules: {},
})
