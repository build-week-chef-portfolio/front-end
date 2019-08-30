import React from 'react';

import Nav from './components/Nav';
import GetData from './components/GetData';


import './App.css';
// const images = './images/LinkCooking';

function App() {
const id = 5;

  return (
    <div className="App">
      <Nav />
      <GetData address="https://chef-portfolio-buildweeks-be.herokuapp.com/" />
    </div>
  );
}

export default App;
