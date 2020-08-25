import React from 'react';
import store from '../store';
import { hireFarmer, payFarmer } from '../actions/farmersActions';
import FarmerManager from './FarmerManager';

class FarmerManagerContainer extends React.Component {
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

  hire = (name) => {
    store.dispatch(hireFarmer(name));
  }

  render() {
    const { farmers: farmersState } = store.getState();
    const farmers = Object.values(farmersState);

    return (
      <FarmerManager
        farmers={farmers}
        pay={this.pay}
        hire={this.hire} />
    );
  }
}

export default FarmerManagerContainer;
