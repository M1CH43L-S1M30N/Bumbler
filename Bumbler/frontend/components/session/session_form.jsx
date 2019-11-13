import React from 'react';
import { Redirect, Link } from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    const { formType, errors } = this.props;
    const formHeading = formType === 'signup' ? 'Sign up' : 'Log in';
    const link = formType === 'signup' ? <Link to='/login'>Log in</Link> : <Link to='/signup'>Sign up</Link>
    const errList = errors.map((err, i) => <li key={i}>{err}</li>);

    const display = this.props.currentUser ? (
      <Redirect to='/' />
    ) : (
        <div className="login">
          {/* ### this is your login / signup chooser ### */}
          {/* <h2 className="btn">{formHeading} or {link}</h2> */}
          <div className="logo"><Link to="/">Bumbler</Link></div>
          <form onSubmit={this.handleSubmit}>
              <input
                className="username"
                type="text"
                value={this.state.username}
                onChange={this.updateField('username')}
                placeholder="Username"
              />

              <input
                className="password"
                type="password"
                value={this.state.password}
                onChange={this.updateField('password')}
                placeholder="Password"
              />
            <button className="btn">{formType}</button>
          </form>
          <ul className="formErrors">{errList}</ul>
        </div>
      );


    return display
  }
}