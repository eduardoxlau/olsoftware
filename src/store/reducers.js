import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { auth } from "../ducks/auth";
import { programming } from "../ducks/programming";
import { gestion } from "../ducks/gestion";
import { profile } from "../ducks/profile";

export default combineReducers({
  // app
  auth,
  programming,
  gestion,
  profile,
  // external
  form,
});
