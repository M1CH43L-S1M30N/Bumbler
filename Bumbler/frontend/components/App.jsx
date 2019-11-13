import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={GreetingContainer} />
  </div>
);

export default App;