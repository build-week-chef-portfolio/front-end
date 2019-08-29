import React from 'react';

import FoodCard from './FoodCard';

export default function Home() {
  return (
    <div>
      <div className="top-content">
        <div>
          <h1>Check out Chef Portfolio's</h1>
        </div>
      </div>
      <div className="middle-cta">
        <FoodCard />
        <div>
          <p>&copy; 2019 Chef Protfolio</p>
        </div>
      </div>
    </div>
  )
}