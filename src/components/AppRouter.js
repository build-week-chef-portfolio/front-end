import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import Login from './Login';
import Signup from './Signup';
import CreatePost from './CreatePost';

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) //fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Redirect to="/protfolio" />
      : <Redirect to='/login' />
  )} />
)


export default function TabNav(props) {
  return (
    <div>
      <Route
        exact
        path="/"
        component={Home}
      />

      <Route
        path="/portfolio"
        render={props => <Portfolio {...props} />}
      />

      {/* <PrivateRoute
        path="/portfolio"
        render={props => <Portfolio {...props} />}
      /> */}

      <Route
        path="/create"
        render={props => <CreatePost {...props} />}
      />

      <Route
        path="/login"
        render={props => <Login {...props} />}
      />

      <Route
        path="/signup"
        render={props => <Signup {...props} />}
      />
    </div>
  );
}