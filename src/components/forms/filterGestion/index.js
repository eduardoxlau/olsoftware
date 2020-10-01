import { reduxForm, reset } from "redux-form";
import Filter from "./screen";
import { bindedFiltrarGestion } from "../../../ducks/gestion";

export default reduxForm({
  form: "FILTRAR_GESTION",
  reset: reset("FILTRAR_GESTION"),
  onSubmit: bindedFiltrarGestion,
})(Filter);
