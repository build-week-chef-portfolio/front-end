import React from 'react';
import { Tab, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from './AppRouter';

const panes = [
  {
    menuItem: (
      <Menu.Item key='home'>
        <NavLink to="/">
          Home
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key='portfolio'>
        <NavLink to="/portfolio">
          Portfolio
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key='create'>
        <NavLink to="/create">
          Create
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key='login'>
        <NavLink to="/login">
          Login
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  {
    menuItem: (
      <Menu.Item key='signup'>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  }
];

export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};
