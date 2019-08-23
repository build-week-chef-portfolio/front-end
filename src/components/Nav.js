import React from 'react';

import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
} from "react-router-dom";


export default function Nav() {
  return (
    <div>
      <Router>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
      </Router>
    </div>
  );
}