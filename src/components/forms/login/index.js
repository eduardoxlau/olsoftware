import { reduxForm } from "redux-form";
import Login from "./screen";
import { bindedLogin } from "../../../ducks/auth";

export default reduxForm({ form: "SIGN_IN", onSubmit: bindedLogin })(Login);
