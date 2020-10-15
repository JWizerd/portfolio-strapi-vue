import { sortBySkills, TYPES } from "@/utils";
const FILTER_ALL = "all";

export const PROJECT_GETTERS = {
  displayProject(state) {
    return state.displayProject;
  },
  projectFilters(state) {
    const projectTypes = state.user.projects.map(p => p.type);
    projectTypes.unshift(FILTER_ALL);
    return Array.from(new Set(projectTypes));
  },
  testimonials(state) {
    return state.projects.map(p => p.testimonials).flat();
  },
  featuredTestimonials(_, getters) {
    return getters.testimonials.filter(t => t.featured);
  },
  filterProjects: (_, getters) => type => {
    let projects = getters.projects;
    if (type && projects && type !== FILTER_ALL) {
      projects = projects.filter(p => p.type === type);
    }

    return projects;
  },
  clients(state, getters) {
    const filterByClientType = p => p.type === TYPES.client;
    const projects = state.user.projects.filter(filterByClientType);
    return sortBySkills(getters.skillFilters, projects);
  },
  projects(state, getters) {
    return sortBySkills(getters.skillFilters, state.projects);
  }
};
