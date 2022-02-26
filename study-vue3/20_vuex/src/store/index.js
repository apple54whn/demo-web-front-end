import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'

const store = createStore({
  state() {
    return {
      rootCounter: 1,
    }
  },
  getters: {
    doubleRootCounter(state) {
      return state.rootCounter * 2
    },
  },
  mutations: {
    increment(state) {
      state.rootCounter++
    },
  },
  modules: {
    home,
    user,
  },
})

export default store
