import { CONTACT_GETTERS } from "./contact";
import { INFO_GETTERS } from "./info";
import { PROJECT_GETTERS } from "./project";

export default {
  ...CONTACT_GETTERS,
  ...INFO_GETTERS,
  ...PROJECT_GETTERS
};
