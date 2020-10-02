export const PROJECT_ACTIONS = {
  async GET_PROJECTS({ commit }, user) {
    let projects;
    const cache = sessionStorage.getItem("vuex_portfolio_projects");

    if (cache) {
      projects = JSON.parse(cache);
    } else {
      projects = await this.$strapi.getEntries("projects", {
        "_where[user]": user.id
      });
    }

    commit("SET_PROJECTS", projects);
  }
};
