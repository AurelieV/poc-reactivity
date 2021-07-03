import { createStore } from 'vuex'

export default createStore({
  state: {
    counters: {
      Lu_Ks: 0,
      Aurélie: 0,
    },
  },
  mutations: {
    setCount(state, { id, value }) {
      state.counters[id] = value
    },
  },
  actions: {
    setCount({ commit }, payload) {
      commit('setCount', payload)
    },
  },
  modules: {},
})
