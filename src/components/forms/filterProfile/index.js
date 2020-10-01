import { reduxForm, reset } from "redux-form";
import Filter from "./screen";
import { bindedFiltrarProfile } from "../../../ducks/profile";

export default reduxForm({
  form: "FILTRAR_PROFILE",
  reset: reset("FILTRAR_PROFILE"),
  onSubmit: bindedFiltrarProfile,
})(Filter);
