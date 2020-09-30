import { reduxForm } from "redux-form";
import Filter from "./screen";
import { bindedFiltrarProgramming } from "../../../ducks/programming";

export default reduxForm({
  form: "FILTRAR_PROGRAMMING",
  onSubmit: bindedFiltrarProgramming,
})(Filter);
