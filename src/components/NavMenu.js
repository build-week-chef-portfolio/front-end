import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  const panes = [
    {
      menuItem: { key: 'home', icon: 'home', content: 'Home' },
      render: () => <Tab.Pane> <a /></Tab.Pane>
    },
    {
      menuItem: { key: 'portfolio', icon: 'users', content: 'Portfolio' },
      render: () => <Tab.Pane><a /></Tab.Pane>
    },
    {
      menuItem: { key: 'login', icon: 'map outline', content: 'Login' },
      render: () => <Tab.Pane><a /></Tab.Pane>
    },
    {
      menuItem: { key: 'signup', icon: 'video', content: 'Sign up' },
      render: () => <Tab.Pane><a /></Tab.Pane>
    }
  ]
  return (
    <Menu><Tab panes={panes} /></Menu>
  );
};