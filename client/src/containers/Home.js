import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    users: state.users,
    lost: state.lost,
    found: state.found
  };
};

export default connect(mapStateToProps)(Home);
