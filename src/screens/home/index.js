import { connect } from "react-redux";
import Home from "./screen";
import { getUser, logout } from "../../ducks/auth";

const mapStateToProps = (state) => ({
  user: getUser(state),
});
const mapDispatchToProps = {
  logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
