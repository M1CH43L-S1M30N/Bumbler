import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: "admin1",
      password: "123456"
    }
    this.props.login(user);
  }

  render() {
    
    const display = this.props.currentUser ? (
      <div className="home">
        <button className="logout" onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
        <div>
          <button className="demo-login" onClick={this.demoLogin}>Demo</button>
          <div className="get-started">
            <div className="logo-div">
              <div className="logo"><Link to="/">Bumbler</Link></div>
              <div className="motto-container">
                <p className="motto">Explore.</p>
                <p className="motto">Discover.</p>
              </div>
            </div>
            <div><Link className="btn" to="/signup">Sign Up</Link></div>
            <div><Link className="btn" to="/login">Log In</Link></div>
          </div>
        </div>
      );
    return display;
  }
}

export default withRouter(Greetings); 