import { getParameterByName } from "@/utils";

export const USER_MUTATIONS = {
  SET_BACKGROUND(state, url) {
    state.background = url;
  },
  SET_USER(state, auth) {
    state.user = auth.user;
    state.skillFilters = getParameterByName("skills");
  }
};
