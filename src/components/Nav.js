import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import Login from './Login';
import Signup from './Signup';

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
      ? <Nav {...props} />
      : <Redirect to='/login' />
  )} />
)


export default function Nav() {
  return (
    <div>
      <Router>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="signup">Sign Up</NavLink>

        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <PrivateRoute path="/portfolio" exact component={Portfolio} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />

      </Router>
    </div>
  );
}
