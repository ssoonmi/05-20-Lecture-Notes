import React from 'react';
import FarmerList from './FarmerList';
import FarmerHire from './FarmerHire';

const FarmerManager = ({ farmers, pay, hire }) => {
  return (
    <div>
      <h2>Farmer Manager</h2>
      <FarmerList farmers={farmers} pay={pay} />
      <FarmerHire hire={hire} />
    </div>
  );
};

export default FarmerManager;
