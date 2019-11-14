import { connect } from "react-redux";
import greeting from "./greeting";
import { logout, login } from "../../actions/session_actions";

const msp = ({ entities, session }) => {
  // 
  return {
    currentUser: entities.users[session.id]
  }
}

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
})

export default connect(msp, mdp)(greeting);