import { connect } from "react-redux";
import greeting from "./greeting";
import { logout } from "../../actions/session_actions";

const msp = ({ entities, session }) => {
  // debugger
  return {
    currentUser: entities.users[session.id]
  }
}

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(greeting);