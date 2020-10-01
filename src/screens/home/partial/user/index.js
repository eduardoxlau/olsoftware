import { connect } from "react-redux";
import {
  getUsers,
  getUsersFilter,
  remove,
  isLoading,
  isFilter,
} from "../../../../ducks/user";
import User from "./screen";

const mapStateToProps = (state) => ({
  users: isFilter(state) ? getUsersFilter(state) : getUsers(state),
  isFilter: isFilter(state),
  loading: isLoading(state),
});
const mapDispatchToProps = {
  remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
