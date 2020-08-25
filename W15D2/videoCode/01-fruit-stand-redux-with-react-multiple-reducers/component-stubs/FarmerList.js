import React from 'react';
import Farmer from './Farmer';

class FarmerList extends React.Component {
  componentDidMount() {
    // TODO Subscribe to the store to listen for state updates.
  }

  componentWillUnmount() {
    // TODO Unsubscribe the listener from the store.
  }

  pay = (id) => {
    // TODO Dispatch to the store an action to pay the farmer.
  }

  render() {
    // TODO Get the farmers state from the store.
    const farmers = [];
    const farmersList = Object.values(farmers);

    return (
      <div>
        <h2>Farmers</h2>
        {farmersList.length > 0
          ? <ul>{farmersList.map((farmer) => <Farmer key={farmer.id} farmer={farmer} pay={this.pay} />)}</ul>
          : <span>No farmers currently available!</span>
        }
      </div>
    );
  }
}

export default FarmerList;
