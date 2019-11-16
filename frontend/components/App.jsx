import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PostIndexContainer from "./posts/text_post_index_container";
import CreatePostFormContainer from "./posts/create_post_form_container";
import EditPostFormContainer from "./posts/edit_post_form_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    {/* <Modal /> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
      <ProtectedRoute exact path="/posts/new" component={CreatePostFormContainer} />
      <ProtectedRoute exact path="/posts/:postId/edit" component={EditPostFormContainer} />
      <AuthRoute exact path="/" component={GreetingContainer} />
      <Redirect to="/posts" />
    </Switch>
  </div>
);

export default App;

// how to get errors not to persist
// what page is after login
// random route 404
// build protected route