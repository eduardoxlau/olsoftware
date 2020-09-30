import { connect } from "react-redux";
import { getProgrammings } from "../../../../ducks/programming";
import Programming from "./screen";

const mapStateToProps = (state) => ({
  programmings: getProgrammings(state),
});

export default connect(mapStateToProps, {})(Programming);
