import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/posts" />
    }
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);


const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);