import React from 'react';
import Farmer from './Farmer';

const FarmersList = ({ farmers, pay }) => {
  return (
    <div>
      <h2>Farmers</h2>
      {farmers.length > 0
        ? <ul>{farmers.map((farmer) => <Farmer key={farmer.id} farmer={farmer} pay={pay} />)}</ul>
        : <span>No farmers currently available!</span>
      }
    </div>
  );
};

export default FarmersList;
