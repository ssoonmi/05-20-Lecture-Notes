import React from 'react';
import FruitManagerContainer from './components/FruitManagerContainer';
import FarmerManagerContainer from './components/FarmerManagerContainer';

function App() {
  return (
    <>
      <h1>Fruit Stand</h1>
      <FruitManagerContainer />
      <FarmerManagerContainer />
    </>
  );
}

export default App;
