import { connect } from "react-redux";
import { isAutheticate } from "../ducks/auth";

import Navigation from "./screen";

const mapStateToProps = (state) => ({
  isAuth: isAutheticate(state),
});

export default connect(mapStateToProps, {})(Navigation);
