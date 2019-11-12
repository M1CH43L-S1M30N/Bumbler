import React from 'react';
import { Link } from 'react-router-dom';

export default class Greetings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = this.props.currentUser ? (
      <div>
        <h2>Welcome {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
        <div>
          <Link className="btn" to="/signup">Sign Up</Link>
          <Link className="btn" to="/login">Log In</Link>
        </div>
      );

    return display;
  }
}