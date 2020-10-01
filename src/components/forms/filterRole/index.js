import { reduxForm, reset } from "redux-form";
import Filter from "./screen";
import { bindedFiltrarRole } from "../../../ducks/role";

export default reduxForm({
  form: "FILTRAR_ROLE",
  reset: reset("FILTRAR_ROLE"),
  onSubmit: bindedFiltrarRole,
})(Filter);
