import { connect } from "react-redux";
import {
  getProgrammings,
  getProgrammingsFilter,
  remove,
  isLoading,
  isFilter,
} from "../../../../ducks/programming";
import Programming from "./screen";

const mapStateToProps = (state) => ({
  programmings: isFilter(state)
    ? getProgrammingsFilter(state)
    : getProgrammings(state),
  isFilter: isFilter(state),
  loading: isLoading(state),
});
const mapDispatchToProps = {
  remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(Programming);
