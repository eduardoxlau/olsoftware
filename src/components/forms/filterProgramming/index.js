import { reduxForm, reset } from "redux-form";
import Filter from "./screen";
import { bindedFiltrarProgramming } from "../../../ducks/programming";

export default reduxForm({
  form: "FILTRAR_PROGRAMMING",
  reset: reset("FILTRAR_PROGRAMMING"),
  onSubmit: bindedFiltrarProgramming,
})(Filter);
