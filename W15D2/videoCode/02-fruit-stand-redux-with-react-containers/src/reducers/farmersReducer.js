import { HIRE_FARMER, PAY_FARMER } from '../actions/farmersActions';

// // Version 1: Single farmers reducer
// // Includes a subtle bug as the result of a shallow copy of state.
// // Modifying the farmer `paid` property updates the original
// // farmer object in state.
// const farmersReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState = Object.assign({}, state);
//   switch (action.type) {
//     case HIRE_FARMER:
//       const farmerToHire = {
//         id: action.id,
//         name: action.name,
//         paid: false
//       };
//       nextState[action.id] = farmerToHire; // add new farmer to state
//       return nextState;
//     case PAY_FARMER:
//       const farmerToPay = nextState[action.id];
//       farmerToPay.paid = !farmerToPay.paid;
//       return nextState;
//     default:
//       return state;
//   }
// };

// Version 2: Farmer and farmers reducers
// The farmers reducer delegates to the farmer reducer
// so that farmer objects are no longer mutated.
const farmerReducer = (state, action) => {
//   // State is a farmer object.
  debugger
  Object.freeze(state);
  switch (action.type) {
    case HIRE_FARMER:
      return {
        id: action.id,
        name: action.name,
        paid: false
      };
    case PAY_FARMER:
      return Object.assign({}, state, {
        paid: !state.paid
      });
    default:
      return state;
  }
};

const farmersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case HIRE_FARMER:
      nextState[action.id] = farmerReducer(undefined, action);
      return nextState;
    case PAY_FARMER:
      nextState[action.id] = farmerReducer(nextState[action.id], action);
      return nextState;
    default:
      return state;
  }
};

export default farmersReducer;
