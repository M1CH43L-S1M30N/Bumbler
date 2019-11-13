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
    this.clearErrors = this.props.clearErrors.bind(this);
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
    const link = formType === 'signup' ? <Link onClick={this.clearErrors} to='/login'><button className="btn-switch">Already have an account?</button></Link> :
     <Link onClick={this.clearErrors} to='/signup'><button className="btn-switch">Create an account!</button></Link>
    const errList = errors.map((err, i) => <li key={i}>{err}</li>);

    const display = this.props.currentUser ? (
      <Redirect to='/' />
    ) : (
        <div>
          <div className="login-form">
            {/* ### this is your login / signup chooser ### */}
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
              {link}
            <ul className="formErrors">{errList}</ul>
          </div>
        </div>
      );


    return display
  }
}