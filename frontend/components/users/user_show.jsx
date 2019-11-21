import React from "react";
import PostIndexItem from "../posts/post_index_item";
import Modal from "../modal/modal";
import { Link } from "react-router-dom";

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, modalOpen: false, editPostId: null }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.requestUsers();
    this.props.requestUser(this.props.match.params.userId)
      .then(() => {
        this.setState({ loading: false, followed: this.props.user.followed })
      });
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

  follow(id) {
    return e => {
      this.props.createFollow(id)
        .then(() => {
          this.setState({ followed: true })
        })
    }
  }

  unfollow(id) {
    return e => {
      this.props.deleteFollow(id)
        .then(() => {
          this.setState({ followed: false })
        })
    }
  }


  render() {
    if (this.state.loading) return null
    let follow;
    let blog;
    if (this.state.followed) {
      follow = <button className="user-options" onClick={this.unfollow(this.props.user.id)}><p>Unfollow</p></button>
      blog = <div className="user-options-blog">@{this.props.user.username}'s Blog<p><img className="blog" src="https://img.icons8.com/flat_round/64/000000/checkmark.png"/></p></div>
    } else {
      follow = <button className="user-options" onClick={this.follow(this.props.user.id)}><p>Follow</p></button>
      blog = <p className="user-options-blog">@{this.props.user.username}'s Blog</p>
    }
    
    const posts = this.props.posts.filter(post => {
      return post.authorId === parseInt(this.props.match.params.userId)
    })
    const postLis = posts.map(post => {
      return <PostIndexItem createLike={this.props.createLike} deleteLike={this.props.deleteLike} openModal={this.openModal(post.id)} 
      key={post.id} currentUser={this.props.currentUser} post={post} deletePost={this.props.deletePost} className="pii" />
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
          <button className="post-button" onClick={this.openModal()}><img className="pen" src="https://img.icons8.com/ios-filled/100/000000/ball-point-pen.png" alt="pen" /></button>
          <button className="profile-pic"><img src={this.props.currentUser.imageUrl} alt="pic" /></button>
          <Link to="/posts"><button className="home-button"><img src="https://serfob.s3.amazonaws.com/media/home-icon4cf-15d6-465c-b634-a2c764c822bc.png"/></button></Link>
          <button className="logout" onClick={this.props.logout}><img className="plus" src="https://cdn4.iconfinder.com/data/icons/interface-2/100/1-512.png" /></button>
        </div>
        <div className="show">
          <div className="user-posts-ul-div">
            <ul className="user-posts-ul">
              {postLis}
            </ul>
          
            <div className="user-div">
              {blog}
              <button className="user-options"><p>Posts</p><p>{postCount}</p></button>
              <button className="user-options"><p>Followers</p><p>{this.props.user.followCount}</p></button>
              {follow}
            </div>
          </div>
        </div>
        {modal}
      </div>
    )
  }
}