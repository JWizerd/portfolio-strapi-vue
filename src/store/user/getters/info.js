import { sortBySkills, sortByDate, TYPES } from "@/utils";

export const INFO_GETTERS = {
  name(state) {
    return state.user.first + " " + state.user.last;
  },
  background(state) {
    return state.background && state.background.largeImageURL;
  },
  user(state) {
    return state.user;
  },
  facts(state) {
    return sortBySkills(state.tags, state.user.facts);
  },
  pertinentDescription(state, getters) {
    if (state.user.resume[0].biographies.length === 1) {
      return state.user.biographies[0].text;
    }

    return sortBySkills(getters.skillFilters, state.user.biographies)[0];
  },
  services(state, getters) {
    return sortBySkills(getters.skillFilters, state.user.skills).filter(
      s => s.featured
    );
  },
  skills(state) {
    return state.user.skills;
  },
  resume(state) {
    return state.user.resumes[0].default;
  },
  education(state, getters) {
    const filterByEducation = e => e.type === TYPES.education;
    const eduExperiences = state.user.experiences.filter(filterByEducation);
    return sortByDate(sortBySkills(getters.skillFilters, eduExperiences));
  },
  experience(state, getters) {
    const filterByWork = e => e.type === TYPES.work;
    const workExperiences = state.user.experiences.filter(filterByWork);
    return sortByDate(sortBySkills(getters.skillFilters, workExperiences));
  }
};
