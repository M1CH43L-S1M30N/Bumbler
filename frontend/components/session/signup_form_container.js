import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  }
}

const dsp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(msp, dsp)(SessionForm);