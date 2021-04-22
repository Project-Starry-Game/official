import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    drawerModel: 0,
  },
  mutations: {
    setDrawerState(state, payload) {
      state.drawer = payload;
    },
    setDrawerModel(state, payload) {
      state.drawerModel = payload;
    },
  },
  actions: {},
  modules: {},
});
