import { reduxForm } from "redux-form";
import User from "./screen";
import { bindedUser } from "../../../ducks/user";

export default reduxForm({
  form: "SUBMIT_USER",
  onSubmit: bindedUser,
})(User);
