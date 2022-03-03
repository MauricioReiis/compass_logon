import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
// import router from '../router/index.js'
=======
import router from '@/router/index.js'
import { loginValidation } from '@/constants/users.js'
>>>>>>> feature/storybook

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusError: false,
    userLogin: "",
    passwordLogin: "",
    user: ""
  },

  getters: {},

  mutations: {
    alterUser(state, user) {
      state.userLogin = user
    },

<<<<<<< HEAD
    // validation(users){
    //   array.forEach(element => {
    //     users[0]
        
    //   });
    // }
=======
    alterPassword(state, password) {
      state.passwordLogin = password
    },

    validationUser(state) {
      loginValidation.every(element => {
        if (state.userLogin !== element.login && state.passwordLogin !== element.password) {
          state.user = false
          return true

        } else {
          state.user = true
          return false
        }
      })

      if (state.user === false) {
        state.statusError = true
        return true

      } else {
        router.push({ name: 'homePage' })
      }
    },
    setStartLogout(state) {
      state.statusError = false
    }

>>>>>>> feature/storybook
  },

  actions: {
  },

  modules: {}
})
