import React from "react";
import  PostIndexItem from "./post_index_item";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, modalOpen: false, editPostId: null }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.requestPosts()
      .then(() => this.setState({loading: false}));
    this.props.requestUsers();
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
    if (this.state.loading) return null;
      const postLis = this.props.posts.map(post => {
        return <PostIndexItem createLike={this.props.createLike} deleteLike={this.props.deleteLike} openModal={this.openModal(post.id)} key={post.id}
        currentUser={this.props.currentUser} post={post} deletePost={this.props.deletePost} className="pii" />
      })
      let modal;
      if (this.state.modalOpen) {
        modal = <Modal requestPost={this.props.requestPost} editPostId={this.state.editPostId} history={this.props.history} closeModal={this.closeModal}/>
      }
    return (
      <div className="home">
        <div className="utility">
          <div className="logo-2"><Link to="/">Bumbler</Link></div>
          <button className="post-button" onClick={this.openModal()}><img className="pen" src="https://img.icons8.com/ios-filled/100/000000/ball-point-pen.png" alt="pen"/></button>
          <Link to={`/users/${this.props.currentUser.id}`} ><button className="profile-pic"><img src={this.props.currentUser.imageUrl} alt="pic" /></button></Link>
          <Link to="/posts"><button className="home-button"><img src="https://serfob.s3.amazonaws.com/media/home-icon4cf-15d6-465c-b634-a2c764c822bc.png" /></button></Link>
          <button className="logout" onClick={this.props.logout}><img className="plus" src="https://cdn4.iconfinder.com/data/icons/interface-2/100/1-512.png"/></button>
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

