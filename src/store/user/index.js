import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state: {
    user: null,
    projects: [],
    background: null,
    skillFilters: null
  },
  actions,
  getters,
  mutations
};
