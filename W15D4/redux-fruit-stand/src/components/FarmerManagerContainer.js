import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hireFarmer, payFarmer } from '../actions/farmersActions';
import { getAllFarmers } from '../reducers/farmersSelectors';
import FarmerManager from './FarmerManager';

const FarmerManagerContainer = () => {
  const farmers = useSelector(state => getAllFarmers(state));
  const dispatch = useDispatch();

  const pay = useCallback((id) => dispatch(payFarmer(id)), [dispatch]);
  const hire = useCallback((id) => dispatch(hireFarmer(id)), [dispatch]);

  return (
    <FarmerManager
      farmers={farmers}
      pay={pay}
      hire = {hire}
    />
  );
}

export default FarmerManagerContainer;
