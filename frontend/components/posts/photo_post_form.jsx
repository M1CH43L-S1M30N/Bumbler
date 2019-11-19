import React from "react";

export default class PhotoPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", imageUrl: "", imageFile: null, body: ""}
    this.handleFileChange = this.handleFileChange.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => this.setState({imageUrl: reader.result, imageFile: file});
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: "", imageFile: null});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    if (this.state.imageFile) {
      formData.append("post[photo]", this.state.imageFile)
    }
    this.props.createImagePost(formData);
    // create prop
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <label className="post-label">Title:
            <input type="text" className="title-input" value={this.state.title} onChange={this.update("title")}/>
          </label>
          <label className="post-label">
            <img src={this.state.imageUrl} alt=""/>
            <input className="choose-img" type="file" onChange={this.handleFileChange}/>
          </label>
          <button className="post-form-button">Post Picture</button>
        </form>
      </div>
    )
  }
}