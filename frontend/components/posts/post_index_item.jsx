import React from "react";
import { Link } from "react-router-dom";

export default class PostIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: this.props.post.liked,
      likeCount: this.props.post.likeCount
    }
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
  }

  likePost(id) {
    return e => {
      this.props.createLike(id)
        .then(() => {
          this.setState({ liked: true, likeCount: this.state.likeCount + 1 })
        })
    }
  }

  unlikePost(id) {
    return e => {
      this.props.deleteLike(id)
        .then(() => {
          this.setState({liked: false, likeCount: this.state.likeCount - 1 })
        })
    }
  }

  renderLinks() {
    if(this.props.currentUser.id === this.props.post.authorId) {
      return (
        <div className="edit-delete">
          <button onClick={() => this.props.deletePost(this.props.post.id)}>Delete</button>
        </div>
      )
    } else {
      return (
        <p className="holder">:(</p>
      )
    }
  }

  render() {
    let likes;
    if (this.state.likeCount === 1) {
      likes = "like"
    } else {
      likes = "likes"
    }
    let likeButton;
    // debugger
    if (this.state.liked) {
      likeButton = <button className="heart" onClick={this.unlikePost(this.props.post.id)}><img src="https://img.icons8.com/officexs/64/000000/hearts.png"/></button>
    } else {
      likeButton = <button className="heart" onClick={this.likePost(this.props.post.id)}><img src="https://img.icons8.com/pastel-glyph/64/000000/hearts.png"/></button>
    }
    let chicken;
    if (this.props.post.imageUrl) {
      chicken = <img src={this.props.post.imageUrl} />
    } else {
      chicken = <p className="body">{this.props.post.body}</p>
    }
    return (
      <li key={this.props.post.id} className="post-item">
        <div className="title-div">
          <Link to={`/users/${this.props.post.authorId}`} ><p className="author">@{this.props.post.authorName}</p></Link>
          <h1 className="title">{this.props.post.title}</h1>
        </div>
        {/* {if(this.props.post.author.id === this.props.post.authorId) {
          
        }}  */}
        {chicken}
        <div className="blue-bar">
          {likeButton}
          <p className="likes">{this.state.likeCount} {likes}</p>
          {this.renderLinks()}
        </div>
      </li>
    )
  }

}