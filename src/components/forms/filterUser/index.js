import { reduxForm, reset } from "redux-form";
import Filter from "./screen";
import { bindedFiltrarUser } from "../../../ducks/user";

export default reduxForm({
  form: "FILTRAR_USER",
  reset: reset("FILTRAR_USER"),
  onSubmit: bindedFiltrarUser,
})(Filter);
