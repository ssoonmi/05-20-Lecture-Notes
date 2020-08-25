import React from 'react';
import store from '../store';
import { payFarmer } from '../actions/farmersActions';
import Farmer from './Farmer';

class FarmerList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  pay = (id) => {
    store.dispatch(payFarmer(id));
  }

  render() {
    const { farmers } = store.getState();

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
