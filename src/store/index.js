import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusError: false,

    login: 'admin',
    password: 'admin'
  
  },

  getters: {
  },

  mutations: {
    setStatusError(state){
      state.statusError = true
    },

    // validation(users){
    //   array.forEach(element => {
    //     users[0]
        
    //   });
    // }
  },

  actions: {
  },
  
  modules: {
  }
})
