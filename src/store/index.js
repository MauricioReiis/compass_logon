import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'

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

    validation(state){
      if(state.login == 'admin' && state.password == 'admin'){
        router.push({name:'home'})

      } else { 
        this.setStatusError()
        this.logar = true
      }
    }
  },

  actions: {
  },
  
  modules: {
  }
})
