import { connect } from "react-redux";
import {
  getRoles,
  getRolesFilter,
  remove,
  isLoading,
  isFilter,
} from "../../../../ducks/role";
import Roles from "./screen";

const mapStateToProps = (state) => ({
  roles: isFilter(state) ? getRolesFilter(state) : getRoles(state),
  isFilter: isFilter(state),
  loading: isLoading(state),
});
const mapDispatchToProps = {
  remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(Roles);
