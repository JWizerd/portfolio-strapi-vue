export const PROJECT_MUTATIONS = {
  TOGGLE_PRODUCT_DISPLAY(state) {
    state.displayProject = !state.displayProject;
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  }
};
