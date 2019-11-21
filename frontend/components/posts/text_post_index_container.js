import { connect } from "react-redux";
import { requestPosts, deletePost, requestPost } from "../../actions/post_actions";
import { requestUsers } from "../../actions/user_actions";
import PostIndex from "./post_index";
import { logout } from "../../actions/session_actions";
import { createLike, deleteLike } from "../../actions/like_actions";

const msp = state => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.entities.users[state.session.id],
    formType: "text"
  }
}

const dsp = dispatch => {
  return {
    requestPosts: () => dispatch(requestPosts()),
    deletePost: id => dispatch(deletePost(id)),
    logout: () => dispatch((logout())),
    requestPost: id => dispatch(requestPost(id)),
    requestUsers: () => dispatch(requestUsers()),
    createLike: id => dispatch(createLike(id)),
    deleteLike: id => dispatch(deleteLike(id))
  }
}

export default connect(
  msp,
  dsp
)(PostIndex);