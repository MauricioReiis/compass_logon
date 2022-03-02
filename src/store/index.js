import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusError: false,
    userLogin: "", 
    passwordLogin: "",
  },

  getters: {
  },

  mutations: {
    alterUser(state, user){
      state.userLogin = user
    },

    alterPassword(state, password){
      state.passwordLogin = password
    },

    validation(state, loginValidation){
      loginValidation.forEach(element => {
        if(state.userLogin !== element.login && state.password !== element.password){
          state.statusError = true          
          
        } else {
          router.push({name:'homePage'})
        }
      });
    },

  },

  actions: {
  },
  
  modules: {
  }
})
