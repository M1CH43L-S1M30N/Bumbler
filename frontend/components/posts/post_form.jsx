import React from "react";
import PostFormContainer from "./create_post_form_container";
import { Link } from "react-router-dom";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEvent(this.state)
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push("/posts"));
      // here lies your problem
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
        <div>
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label className="post-label">Title:
              <input
              className="title-input"
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              />
            </label>
            <label className="post-label">Body:
              <textarea className="textarea" cols="22" rows="8"
              value={this.state.body}
              onChange={this.update("body")}
              >
              </textarea>
            </label>
            <button className="post-form-button" >{this.props.formType}</button>
          </form>
        </div>
    )
  };
}