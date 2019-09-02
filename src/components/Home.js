import React from 'react';

import FoodCard from './FoodCard';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: circe-rounded;
`;

export default function Home() {
  return (
    <div>
      <div className="top-content">
        <div>
          <Title >Check out Chef Portfolio's</Title>
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