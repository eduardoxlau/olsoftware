import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { auth } from "../ducks/auth";

export default combineReducers({
  // app
  auth,
  // external
  form,
});
