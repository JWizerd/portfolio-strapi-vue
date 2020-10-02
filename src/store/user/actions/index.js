import { USER_ACTIONS } from "./user";
import { PROJECT_ACTIONS } from "./project";

export default {
  ...PROJECT_ACTIONS,
  ...USER_ACTIONS
};
