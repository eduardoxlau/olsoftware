import { connect } from "react-redux";
import {
  getProfiles,
  getProfilesFilter,
  remove,
  isLoading,
  isFilter,
} from "../../../../ducks/profile";
import Profile from "./screen";

const mapStateToProps = (state) => ({
  profiles: isFilter(state) ? getProfilesFilter(state) : getProfiles(state),
  isFilter: isFilter(state),
  loading: isLoading(state),
});
const mapDispatchToProps = {
  remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
