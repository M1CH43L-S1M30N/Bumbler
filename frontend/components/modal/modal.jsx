import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreatePostFormContainer from "../posts/create_post_form_container";
import PostForm from "../posts/post_form";
import EditPostFormContainer from "../posts/edit_post_form_container";
import { requestPost } from "../../actions/post_actions";
import PhotoPostFormContainer from "../posts/photo_post_form_container";


export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {modalType: ""};

    this.chooseImage = this.chooseImage.bind(this);
    this.chooseText = this.chooseText.bind(this);
  }

  componentDidMount() {
    if(this.props.editPostId) {
      this.setState({modalType: "edit"})
    } else {
      this.setState({modalType: "default"})
    }
  }

  chooseImage(e) {
    e.preventDefault();

    this.setState({ modalType: "image"})
  }

  chooseText(e) {
    
    e.preventDefault();

    this.setState({modalType: "text"})
  }


  render() {
    let component;
    if(this.state.modalType === "image") {
      component = <PhotoPostFormContainer />
      // component = <h3 className="bait">🤑Upgrade to premium membership to post pictures🤑</h3>
    } else if(this.state.modalType === "text") {
      component = <CreatePostFormContainer history={this.props.history} closeModal={this.props.closeModal}/>
    } else if(this.state.modalType === "edit") {
      component = <EditPostFormContainer postId={this.props.editPostId} history={this.props.history} closeModal={this.props.closeModal}/>
    } else if(this.state.modalType === "default") {
      component = <div className="post-picker">
        <button className="post-icon" onClick={this.chooseText}><img className="txt-icon" src="https://img.icons8.com/ios-filled/150/000000/document.png" alt="img"/></button>
        <button className="img-post-icon" onClick={this.chooseImage}><img className="pic-icon" src="https://img.icons8.com/ios-filled/100/000000/camera.png" alt="img"/></button>
      </div>
    }
    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    )
  }
}