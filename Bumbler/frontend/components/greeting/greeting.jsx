import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const display = this.props.currentUser ? (
      <header className="header">
        <h1>Bumbler</h1>
        <h2>Welcome {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Log Out</button>
      </header>
    ) : (
        <div className="home">
          <div className="logo"><Link to="/">Bumbler</Link></div>
          <div><Link className="btn" to="/signup">Sign Up</Link></div>
          <div><Link className="btn" to="/login">Log In</Link></div>
        </div>
      );
    debugger;
    return display;
  }
}

export default withRouter(Greetings); 