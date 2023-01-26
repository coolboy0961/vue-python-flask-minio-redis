import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count: (state) => {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    reset({ commit }) {
      commit("reset");
    },
  },
  modules: {},
});
