import React from 'react';

import Nav from './components/Nav';
import Home from './components/Home';
import FoodCard from './components/FoodCard';//Testing this one
// import NavMenu from './components/NavMenu';

import './App.css';
const images = './images/LinkCooking';

function App() {

  return (
    <div className="App">
      <Nav />
      <FoodCard pic={require('./images/LinkCooking.jpg')} description='I make risotto!'/>
      {/* <NavMenu /> */}
    </div>
  );
}

export default App;
