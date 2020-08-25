import React from 'react';

const Farmer = ({ farmer, pay }) => {
  const handleClick = () => pay(farmer.id);

  return (
    <li>
      {farmer.name}
      {farmer.paid === false &&
        <button onClick={handleClick}>PAY</button>
      }
    </li>
  );
};

export default Farmer;
