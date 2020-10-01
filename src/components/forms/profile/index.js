import { reduxForm } from "redux-form";
import Profile from "./screen";
import { bindedProfile } from "../../../ducks/profile";

export default reduxForm({
  form: "SUBMIT_PROFILE",
  onSubmit: bindedProfile,
})(Profile);
