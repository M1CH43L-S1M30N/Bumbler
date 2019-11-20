import React from "react";
import  PostIndexItem from "./post_index_item";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false, editPostId: null }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  openModal(id) {
    // e.preventDefault();
    return e => {
      e.preventDefault();
      if (id) {
        this.setState({ modalOpen: true, editPostId: id });
      } else {
        this.setState({ modalOpen: true });
      }
    }
  }

  closeModal() {
    
    this.setState({ editPostId: null, modalOpen: false })
  }

  render() {
      const postLis = this.props.posts.map(post => {
        return <PostIndexItem openModal={this.openModal(post.id)} key={post.id} currentUser={this.props.currentUser} post={post} deletePost={this.props.deletePost} className="pii" />
      })
      let modal;
      if (this.state.modalOpen) {
        modal = <Modal requestPost={this.props.requestPost} editPostId={this.state.editPostId} history={this.props.history} closeModal={this.closeModal}/>
      }
    return (
      <div className="home">
        <div className="utility">
          <div className="logo-2"><Link to="/">Bumbler</Link></div>
          <Link to={`/users/${this.props.currentUser.id}`} ><button className="profile-pic"><img src={this.props.currentUser.imageUrl} alt="pic" /></button></Link>
          <button className="post-button" onClick={this.openModal()}><img className="plus" src="https://img.icons8.com/ios-filled/100/000000/ball-point-pen.png" alt="pen"/></button>
          <button className="logout" onClick={this.props.logout}><img className="plus" src="https://img.icons8.com/ios-filled/100/000000/logout-rounded-left.png"/></button>
        </div>
        <div className="post-ul-div">
          <ul className="post-ul">
            {postLis}
          </ul>
            {/* ### Add possible link to create new post ### */}
        </div>
        {modal}
      </div>
    )
  }
}

