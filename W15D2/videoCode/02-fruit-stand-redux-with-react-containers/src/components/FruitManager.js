import React from 'react';
import FruitList from './FruitList';
import FruitSeller from './FruitSeller';
import FruitQuickAdd from './FruitQuickAdd';
import FruitBulkAdd from './FruitBulkAdd';

const FruitManager = ({ fruit, distinctFruit, add, addBulk, sell, sellAll }) => {
  return (
    <div>
      <h2>Available Fruit</h2>
      <FruitList fruit={fruit} />
      <h2>Fruit Inventory Manager</h2>
      <FruitSeller distinctFruit={distinctFruit} sell={sell} sellAll={sellAll} />
      <FruitQuickAdd add={add} />
      <FruitBulkAdd addBulk={addBulk} />
    </div>
  );
};

export default FruitManager;
