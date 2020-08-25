import React from 'react';
import FruitList from './FruitList';
import FruitSeller from './FruitSeller';
import FruitQuickAdd from './FruitQuickAdd';
import FruitBulkAdd from './FruitBulkAdd';

class FruitManager extends React.Component {
  render() {
    return (
      <div>
        <h2>Available Fruit</h2>
        <FruitList />
        <h2>Fruit Inventory Manager</h2>
        <FruitSeller />
        <FruitQuickAdd />
        <FruitBulkAdd />
      </div>
    );
  }
}

export default FruitManager;
