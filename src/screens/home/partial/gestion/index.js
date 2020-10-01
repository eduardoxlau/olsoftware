import { connect } from "react-redux";
import {
  getGestiones,
  getGestionesFilter,
  remove,
  isLoading,
  isFilter,
} from "../../../../ducks/gestion";
import Gestion from "./screen";

const mapStateToProps = (state) => ({
  gestiones: isFilter(state) ? getGestionesFilter(state) : getGestiones(state),
  isFilter: isFilter(state),
  loading: isLoading(state),
});
const mapDispatchToProps = {
  remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(Gestion);
