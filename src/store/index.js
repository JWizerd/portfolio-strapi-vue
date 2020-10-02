import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
Vue.use(Vuex);

export default new Vuex.Store({
  defaultBackgroundImageCategory: "coffee beans",
  state: {
    formError: null,
    formSuccess: false,
    pageLoading: true,
    menu: false
  },
  getters: {
    formError(state) {
      return state.formError;
    },
    formSuccess(state) {
      return state.formSuccess;
    },
    menu(state) {
      return state.menu;
    },
    pageLoading(state) {
      return state.pageLoading;
    }
  },
  mutations: {
    SET_ERROR(state, error) {
      if (error) state.formError = error.message;
      state.formError = error;
    },
    SET_SUCCESS(state, bool) {
      state.formSuccess = bool;
    },
    TOGGLE_LOADING(state, bool) {
      state.pageLoading = bool;
    },
    TOGGLE_MENU(state) {
      state.menu = !state.menu;
    }
  },
  actions: {
    async SUBMIT({ commit }, form) {
      try {
        await this.$strapi.createEntry("leads", form);
        commit("SET_ERROR", null);
        commit("SET_SUCCESS", true);
      } catch (error) {
        commit("SET_ERROR", error);
        commit("SET_SUCCESS", false);
      }
    }
  },
  modules: {
    user
  }
});
