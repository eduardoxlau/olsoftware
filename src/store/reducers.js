import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { auth } from "../ducks/auth";
import { programming } from "../ducks/programming";

export default combineReducers({
  // app
  auth,
  programming,
  // external
  form,
});
