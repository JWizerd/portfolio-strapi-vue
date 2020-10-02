export const USER_ACTIONS = {
  async GET_USER({ commit, dispatch }) {
    try {
      let auth;
      const cache = sessionStorage.getItem("vuex_portfolio_user");

      if (cache) {
        auth = JSON.parse(sessionStorage.getItem("vuex_portfolio_user"));
      } else {
        auth = await this.$strapi.login(this.$username, this.$token);
        sessionStorage.setItem("vuex_portfolio_user", JSON.stringify(auth));
      }

      commit("SET_USER", auth);
      dispatch("GET_PROJECTS", auth.user);
      dispatch("GET_BACKGROUND", auth.user);
      commit("TOGGLE_LOADING", false);
    } catch (error) {
      console.error("FAILURE in INIT ACTION", error);
    }
  },
  async GET_BACKGROUND({ commit }, user) {
    const background = await this.$pixabay.random(user.backgroundImageCategory);
    commit("SET_BACKGROUND", background);
  }
};
