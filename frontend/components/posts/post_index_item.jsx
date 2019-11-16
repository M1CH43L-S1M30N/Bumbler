import React from "react";
import { Link } from "react-router-dom";

export default class PostIndexItem extends React.Component {
  renderLinks() {
    if(this.props.currentUser.id === this.props.post.author.id) {
      return (
        <div className="edit-delete">
          <button onClick={this.props.openModal}>Edit</button>
          <button onClick={() => this.props.deletePost(this.props.post.id)}>❌</button>
        </div>
      )
    } else {
      return (
        <p className="holder">empty spot</p>
      )
    }
  }

  render() {
    return (
      <li className="post-item">
        <div className="title-div">
          <p className="author">@{this.props.post.author.username}</p>
          <h1 className="title">{this.props.post.title}</h1>
        </div>
        {/* {if(this.props.post.author.id === this.props.post.authorId) {
          
        }}  */}
        <p className="body">{this.props.post.body}</p>
        <div className="blue-bar">
          <p>comments</p>
          <p>likes</p>
          {this.renderLinks()}
        </div>
      </li>
    )
  }

}