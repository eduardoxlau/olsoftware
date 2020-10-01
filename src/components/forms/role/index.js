import { reduxForm } from "redux-form";
import Role from "./screen";
import { bindedRole } from "../../../ducks/role";

export default reduxForm({
  form: "SUBMIT_ROLE",
  onSubmit: bindedRole,
})(Role);
