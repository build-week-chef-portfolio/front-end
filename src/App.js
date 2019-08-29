import React from 'react';

import Nav from './components/Nav';
import CardList from './components/CardList';


import './App.css';
// const images = './images/LinkCooking';

function App() {
const id = 5;

  return (
    <div className="App">
      <Nav />
      <CardList address="https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts/" />
    </div>
  );
}

export default App;
