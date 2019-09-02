import React from 'react';
import { GetData } from './GetData';
import FoodCard from './FoodCard';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: circe-rounded;
`;

export default function Home() {
  const data = GetData('https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts/1');
  return (
    <div>
      <div className="top-content">
        <div>
          <Title >Check out Chef Portfolio's</Title>
        </div>
      </div>
      <div className="middle-cta">
        <div>
          {console.log(GetData('https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts/1'))}
          <p>&copy; 2019 Chef Protfolio</p>
        </div>
      </div>
    </div>
  )
}