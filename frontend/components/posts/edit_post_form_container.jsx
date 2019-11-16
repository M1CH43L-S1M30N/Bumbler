import React from "react";
import { connect } from "react-redux";
import { requestPost, updatePost } from "../../actions/post_actions";
import PostForm from "./post_form";
import { withRouter } from "react-router-dom";

class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.requestPost(this.props.postId);
  }

  render() {
    const { post, formType, submitEvent, history } = this.props;
    if (!post) return null;
    return (
      <PostForm
      post={post}
      formType={formType}
      submitEvent={submitEvent}
      history={this.props.history}
      closeModal={this.props.closeModal}
      />
    )
  }
}

const msp = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.postId],
    formType: "Update Post"
  }
}

const dsp = dispatch => {
  return {
    requestPost: id => dispatch(requestPost(id)),
    submitEvent: post => dispatch(updatePost(post))
  }
}

export default connect(
  msp,
  dsp
)(EditPostForm);