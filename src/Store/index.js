import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isEnglish: false,
    token: null,
  },
  getters: {
    isEnglish: (state) => {
      return state.isEnglish;
    },
    isAuthorized(state) {
      return !!state.token;
    }
  },
  mutations: {
    setLang(state, isEnglish) {
      state.isEnglish = isEnglish;
    },
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {
    setLang(context, isEnglish) {
      context.commit("setLang", isEnglish);
    },
    setToken(context, token) {
      context.commit("setToken", token);
    },
  },
});
