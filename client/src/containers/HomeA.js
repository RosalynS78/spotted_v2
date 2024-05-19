import { connect } from "react-redux";
import HomeA from "../components/HomeA";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(HomeA);
