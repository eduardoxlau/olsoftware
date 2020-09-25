import { connect } from "react-redux";
import { isLoading } from "../../ducks/auth";
import Login from "./screen";

const mapStateToProps = (state) => ({
  loading: isLoading(state),
});

export default connect(mapStateToProps, {})(Login);
