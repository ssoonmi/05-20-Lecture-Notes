import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addFruit,
  addFruits,
  sellFruit,
  sellOut,
} from '../actions/fruitActions';
import { getDistinctFruit } from '../reducers/fruitSelectors';
import FruitManager from './FruitManager';

const FruitManagerContainer = () => {
  const fruit = useSelector(state => state.fruit)
  const distinctFruit = useSelector(state => getDistinctFruit(state))
  const dispatch = useDispatch()

  return (
    <FruitManager
      fruit={fruit}
      distinctFruit={distinctFruit}
      add={(fruit) => dispatch(addFruit(fruit))}
      addBulk={(fruit) => dispatch(addFruits(fruit))}
      sell={(fruit) => dispatch(sellFruit(fruit))}
      sellAll={() => dispatch(sellOut())}
    />
  );
}

export default FruitManagerContainer;
