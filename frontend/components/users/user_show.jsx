import React from "react";
import PostIndexItem from "../posts/post_index_item";
import Modal from "../modal/modal";
import { Link } from "react-router-dom";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false, editPostId: null }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestUser(this.props.match.params.userId);
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

    this.setState({ editPostId: null, modalOpen: false });
  }


  render() {
    
    
    const posts = this.props.posts.filter(post => {
      return post.authorId === parseInt(this.props.match.params.userId)
    })
    const postLis = posts.map(post => {
      return <PostIndexItem createLike={this.props.createLike} deleteLike={this.props.deleteLike} openModal={this.openModal(post.id)} key={post.id} currentUser={this.props.currentUser} post={post} deletePost={this.props.deletePost} className="pii" />
    })
    const postCount = postLis.length;
    let modal;
    if (this.state.modalOpen) {
      modal = <Modal requestPost={this.props.requestPost} editPostId={this.state.editPostId} history={this.props.history} closeModal={this.closeModal} />
    }
    return (
      <div className="user-page">
        <div className="utility">
          <div className="logo-2"><Link to="/">Bumbler</Link></div>
          <button className="profile-pic"><img src={this.props.currentUser.imageUrl} alt="pic" /></button>
          <button className="post-button" onClick={this.openModal()}><img className="plus" src="https://img.icons8.com/ios-filled/100/000000/ball-point-pen.png" alt="pen" /></button>
          <Link to="/posts"><button className="home-button"><img src="https://img.icons8.com/cotton/64/000000/home--v1.png"/></button></Link>
          <button className="logout" onClick={this.props.logout}><img className="plus" src="https://img.icons8.com/ios-filled/100/000000/logout-rounded-left.png" /></button>
        </div>
        <div className="show">
          <div className="user-posts-ul-div">
            <ul className="user-posts-ul">
              {postLis}
            </ul>
          
            <div className="user-div">
              <button className="user-options"><p>Posts</p><p>{postCount}</p></button>
              <button className="user-options">Followers</button>
            </div>
          </div>
        </div>
        {modal}
      </div>
    )
  }
}