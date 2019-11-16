// import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from "./post_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {
    post: {
      title: "",
      body: ""
    },
    formType: "Create Post",
  }
}

const dsp = dispatch => {
  return {
    submitEvent: post => dispatch(createPost(post))
  }
}

export default connect(
  msp,
  dsp
)(PostForm);