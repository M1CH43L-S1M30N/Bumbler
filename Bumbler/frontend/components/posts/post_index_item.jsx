import React from "react";
import { Link } from "react-router-dom";

export default class PostIndexItem extends React.Component {
  render() {
    debugger
    return (
      <li className="post-item">
        <div className="title-div">
          <p className="author">@{this.props.post.author.username}</p>
          <h1 className="title">{this.props.post.title}</h1>
        </div>
        <p className="body">{this.props.post.body}</p>
        <div className="edit-delete">
          <Link to={`/posts/${this.props.post.id}/edit`}><button>Edit</button></Link>
          <button onClick={() => this.props.deletePost(this.props.post.id)}>Delete</button>
        </div>
      </li>
    )
  }
}