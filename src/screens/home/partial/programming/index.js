import { connect } from "react-redux";
import {
  getProgrammings,
  remove,
  isLoading,
} from "../../../../ducks/programming";
import Programming from "./screen";

const mapStateToProps = (state) => ({
  programmings: getProgrammings(state),
  loading: isLoading(state),
});
const mapDispatchToProps = {
  remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(Programming);
