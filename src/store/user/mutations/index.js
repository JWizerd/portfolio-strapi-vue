import { PROJECT_MUTATIONS } from "./project";
import { USER_MUTATIONS } from "./user";

export default {
  ...PROJECT_MUTATIONS,
  ...USER_MUTATIONS
};
