import React from 'react';

import FoodCard from './FoodCard';

export default function Home() {
  return (
    <div>
      <div className="top-content">
        <div>
          <h1>Check out Chef Portfolio's</h1>
          <h3>Delicious food</h3>
        </div>
      </div>
      <div className="middle-cta">
        <div>
          <FoodCard />

        </div>
        <div>
          <p>&copy; 2019 Chef Protfolio</p>
        </div>
      </div>
    </div>
  )
}