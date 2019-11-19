import { connect } from "react-redux";
import { createImagePost } from "../../actions/post_actions";
import PhotoPostForm from "./photo_post_form";

const msp = state => {
  return {
    post: {
      title: "",
      imageUrl: "",
      imageFile: null,
      body: ""
    }
  }
}

const dsp = dispatch => {
  return {
    createImagePost: post => dispatch(createImagePost(post)) 
  }
}

export default connect(
  msp,
  dsp
)(PhotoPostForm);