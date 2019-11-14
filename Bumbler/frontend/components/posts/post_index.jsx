import React from "react";
import  PostIndexItem from "./post_index_item";
import { Link } from "react-router-dom";

export default class PostIndex extends React.Component {
  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
      let postLis = this.props.posts.map(post => {
        return <PostIndexItem key={post.id} post={post} deletePost={this.props.deletePost} className="pii" />
      })
    return (
      <div className="post-ul-div">
        <ul className="post-ul">
          {postLis}
        </ul>
          {/* ### Add possible link to create new post ### */}
      </div>
    )
  }
}

// p = Post.new(title: "Future Google employee NBD", body: "If I don't get a job at Google in the next 6 months, I quit. I'll just follow my first passion. Video Games!!", authorId: 5)