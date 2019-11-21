import { requestUser, requestUsers } from "../../actions/user_actions";
import UserShow from "./user_show";
import { connect } from "react-redux";
import { requestPosts, deletePost } from "../../actions/post_actions";
import { logout } from "../../actions/session_actions";
import { createLike, deleteLike } from "../../actions/like_actions";

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.entities.users[state.session.id]
  }
}

const dsp = dispatch => {
  return {
    requestUser: id => dispatch(requestUser(id)),
    requestPosts: () => dispatch(requestPosts()),
    logout: () => dispatch((logout())),
    deletePost: id => dispatch(deletePost(id)),
    requestUsers: () => dispatch(requestUsers()),
    createLike: id => dispatch(createLike(id)),
    deleteLike: id => dispatch(deleteLike(id))
  }
}

export default connect(
  msp,
  dsp
)(UserShow);