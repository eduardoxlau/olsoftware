import { reduxForm } from "redux-form";
import Programming from "./screen";
import { bindedGestion } from "../../../ducks/gestion";

export default reduxForm({
  form: "SUBMIT_GESTION",
  onSubmit: bindedGestion,
})(Programming);
