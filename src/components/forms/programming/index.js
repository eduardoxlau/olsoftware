import { reduxForm } from "redux-form";
import Programming from "./screen";
import { bindedProgramming } from "../../../ducks/programming";

export default reduxForm({
  form: "SUBMIT_PROGRAMMING",
  onSubmit: bindedProgramming,
})(Programming);
