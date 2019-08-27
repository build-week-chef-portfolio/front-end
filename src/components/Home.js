import React from 'react';

import FoodCard from './FoodCard';

export default function Home() {
  return (
    <div>
      <div className="top-content">
        <div>
          <h1>Welcome to Chef Protfolio</h1>
          <h3>Become a Chef</h3>
          <button>Hi</button>
          <h3>View Protfolio's</h3>
          <button>Hi</button>
          <img />
          {/* <Field /> */}
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