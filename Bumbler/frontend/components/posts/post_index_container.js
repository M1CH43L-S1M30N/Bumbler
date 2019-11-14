import { connect } from "react-redux";
import { requestPosts, deletePost } from "../../actions/post_actions";
import PostIndex from "./post_index";

const msp = state => {
  return {
    posts: Object.values(state.posts)
  }
}

const dsp = dispatch => {
  return {
    requestPosts: () => dispatch(requestPosts()),
    deletePost: id => dispatch(deletePost(id))
  }
}

export default connect(
  msp,
  dsp
)(PostIndex);