import { connect } from "react-redux";
import { requestPosts, deletePost } from "../../actions/post_actions";
import PostIndex from "./post_index";
import { logout } from "../../actions/session_actions";

const msp = state => {
  return {
    posts: Object.values(state.posts),
    currentUser: state.entities.users[state.session.id]
  }
}

const dsp = dispatch => {
  return {
    requestPosts: () => dispatch(requestPosts()),
    deletePost: id => dispatch(deletePost(id)),
    logout: () => dispatch((logout()))
  }
}

export default connect(
  msp,
  dsp
)(PostIndex);