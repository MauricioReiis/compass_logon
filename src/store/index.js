import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusError: false
    // array.forEach(element => {
      
    // });
  },

  getters: {
  },

  mutations: {
    setStatusError(state){
      state.statusError = true
    }
  },

  actions: {
  },
  
  modules: {
  }
})
